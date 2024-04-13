import { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { hash } from 'argon2';
import Student from '../models/Student';

const router = Router();

const JWT_SIGNING_SECRET = process.env.JWT_SIGNING_SECRET || '';

async function SignupController(req: Request, res: Response) {
  const {
    name,
    email,
    password,
    role,
    board,
    grade,
    medium,
  }: {
    name: string;
    email: string;
    password: string;
    role: string;
    board: string;
    grade: number;
    medium: string;
  } = req.body;
  try {
    const user = await User.findOne({ email: email }).exec();
    if (user !== null) {
      res.json({ error: true, message: 'Email already registered' });
    } else {
      const hashedPwd = await hash(password);
      const user = await (
        await User.create({
          email: email,
          password: hashedPwd,
          name: name,
          role: role,
        })
      ).save();
      if (role === 'Student') {
        await (
          await Student.create({
            user: user._id,
            board: board,
            grade: grade,
            medium: medium,
          })
        ).save();
      }
      const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: role,
      };
      const token = jwt.sign(payload, JWT_SIGNING_SECRET);
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        maxAge: 31536000000, // 365 days
        sameSite: 'none',
      });
      res.cookie('user', payload, {
        httpOnly: false,
        secure: true,
        maxAge: 31536000000, // 365 days
        sameSite: 'none',
      });
      res.send({
        error: false,
        message: 'Signed up successfully',
        // token: token,
      });
    }
  } catch (err) {
    res.send({ error: true, message: 'Internal server error' });
  }
}

router.post(
  '/',
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name must be of 3 characters long.')
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('Name must be alphabetic.'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
  body('password')
    .trim()
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      'Password not strong enough: must be atleast 8 characters long and must contain atleast one lowercase, uppercase and special character'
    ),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.json({
        error: true,
        message: err
          .array()
          .map((val) => val.msg)
          .join(', '),
      });
    } else {
      next();
    }
  },
  SignupController
);

export default router;
