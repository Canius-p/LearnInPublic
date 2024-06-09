import { Router } from 'express';
import authroutes from './auth.route';

const rootrouter = Router();
rootrouter.use('/auth', authroutes);

export default rootrouter;
