export class HttpException extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  error: ErrorCode;
  constructor(
    messge: string,
    errorCode: ErrorCode,
    statusCode: number,
    error: any
  ) {
    super(messge);
    this.message = messge;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export enum ErrorCode {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INVALID_PASSWORD = 1003,
  INVALID_EMAIL = 1004,
  INVALID_USERNAME = 1005,
  USER_NOT_ACTIVE = 1006,
  EMAIL_NOT_VERIFIED = 1007,
  PASSWORD_NOT_VERIFIED = 1008,
}
