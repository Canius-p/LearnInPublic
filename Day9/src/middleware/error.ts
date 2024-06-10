import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../services/error.codes';

export const errorHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(err.statusCode)
    .json({ message: err.message, error: err.errorCode });
};
