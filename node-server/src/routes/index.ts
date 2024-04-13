import { Router } from 'express';
import LoginRouter from './login';
import SignupRouter from './signup';

const router = Router();

router.use('/login', LoginRouter);
router.use('/signup', SignupRouter);

router.all('*', (req, res) => {
  res.status(404).send({ message: 'Endpoint does not exist' });
});

export default router;
