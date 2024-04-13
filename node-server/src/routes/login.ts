import { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { verify } from 'argon2';

const router = Router();

const JWT_SIGNING_SECRET = process.env.JWT_SIGNING_SECRET || '';

async function LoginController(req: Request, res: Response) {
  const {
    email,
    password,
  }: {
    email: string;
    password: string;
    role: string;
  } = req.body;
  try {
    const user = await User.findOne({ email: email }).exec();
    if (user === null) {
      res.json({ error: true, message: 'User not registered' });
    } else {
      let correctPassword = await verify(user.password, password);
      if (correctPassword) {
        const payload = {
          id: user._id,
          email: user.email,
          name: user.name,
        };
        const token = jwt.sign(payload, JWT_SIGNING_SECRET);
        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          maxAge: 31536000000, // 365 days
          sameSite: 'none',
          signed: true,
        });
        res.cookie('user', payload, {
          httpOnly: false,
          secure: true,
          maxAge: 31536000000, // 365 days
          sameSite: 'none',
        });
        res.send({
          error: false,
          message: 'Logged in successfully',
          // token: token,
        });
      } else {
        res.status(401).send({ error: true, message: 'Wrong password' });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: true, message: 'Internal server error' });
  }
}

router.post(
  '/',
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
    .withMessage('Invalid password'),
  body('name').trim(),
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
  LoginController
);

export default router;
