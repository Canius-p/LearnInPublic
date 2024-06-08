import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env' });

export const PORT = process.env.PORT || 3000;
