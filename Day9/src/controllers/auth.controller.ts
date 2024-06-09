import { Request, Response } from 'express';
import { prisma } from '..';
import { compareSync, hashSync } from 'bcrypt';

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
  res.status(201).json({ message: 'User created successfully' });
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = prisma.user.findFirst({ where: { email: email } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  if (!compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  res.status(200).json({ message: 'User logged in successfully' });
};
