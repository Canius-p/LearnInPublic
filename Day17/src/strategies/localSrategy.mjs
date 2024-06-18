import passport from 'passport';

import { Strategy } from 'passport-local';
import { mockUsers } from '../utils/constants.mjs';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(
    null,
    mockUsers.find(user => user.id === id)
  );
});

export default passport.use(
  new Strategy({ usernameField: 'email' }, (username, passport, done) => {
    try {
      const findUser = mockUsers.find(user => user.username === username);
      if (!findUser) throw new Error('User not found');
      if (findUser.password !== passport) throw new Error('Password not match');
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  })
);
