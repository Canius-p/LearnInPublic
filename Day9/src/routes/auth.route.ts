import { Router } from 'express';
const authroutes = Router();
import { signup, login } from '../controllers/auth.controller';
authroutes.get('/login', login);
authroutes.post('/signup', signup);

export default authroutes;
