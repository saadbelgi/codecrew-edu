import { Router } from 'express';
import LoginRouter from './login';
import SignupRouter from './signup';
import ResourceRouter from './resources';

const router = Router();

router.use('/login', LoginRouter);
router.use('/signup', SignupRouter);
router.use('/', ResourceRouter);

router.all('*', (req, res) => {
  res.status(404).send({ message: 'Endpoint does not exist' });
});

export default router;
