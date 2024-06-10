import { ErrorCode, HttpException } from './error.codes';

export class BadRequestexception extends HttpException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 400, null);
  }
}
