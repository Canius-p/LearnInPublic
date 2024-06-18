const { getUserById } = require('../controller/userContoller');

const mockRequest = {
  findUserIndex: 1,
};

const mockResponse = {
  sendStatus: jest.fn(),
  send: jest.fn(),
};

describe('user test', () => {
  it('should get user by id', () => {
    getUserById(mockRequest, mockResponse);
  });
});
