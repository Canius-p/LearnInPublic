import { mockUsers } from '../utils/constants.mjs';

export const getUserByIds = async (req, res) => {
  const { findUserIndex } = req;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
};
