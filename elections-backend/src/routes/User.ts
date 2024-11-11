import express from 'express';
import { register } from '../controllers/sign-log-in/RegisterController';
import { login } from '../controllers/sign-log-in/LoginController'

const router = express.Router();

router.post('/register', register);
router.post('/login' ,login)
export default router;

