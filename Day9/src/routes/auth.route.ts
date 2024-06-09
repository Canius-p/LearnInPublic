import { Router } from 'express';
const authroutes = Router();
import { signup, login } from '../controllers/auth.controller';
authroutes.get('/login', login);

export default authroutes;
