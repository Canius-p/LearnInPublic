import { Request, Response } from 'express';
import { prisma } from '..';
import { compareSync, hashSync } from 'bcrypt';

import * as Jwt from 'jsonwebtoken';
import { jsonwebtokenSecret } from '../secrets';
import { ErrorCode } from '../services/error.codes';
import { BadRequestexception } from '../services/bad.request';

export const signup = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });
  if (user) {
    throw new BadRequestexception(
      'User already exists',
      ErrorCode.USER_ALREADY_EXISTS
    );
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

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  if (!compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  const token = Jwt.sign(
    {
      id: user.id,
    },
    jsonwebtokenSecret
  );
  res.status(200).json({ message: 'User logged in successfully', token });
};
