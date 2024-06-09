import { Request, Response } from 'express';
import { prisma } from '..';
import { hashSync } from 'bcrypt';

export const signup = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });
  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }
  user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashSync(password, 10),
    },
  });
};

export const login = (req: Request, res: Response) => {
  console.log('logged');
};
