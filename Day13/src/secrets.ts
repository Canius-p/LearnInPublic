import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// export const secret = process.env.SECRET;

export const PORT = process.env.PORT || 3000;
