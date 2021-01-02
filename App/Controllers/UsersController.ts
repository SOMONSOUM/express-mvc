import { RequestHandler } from 'express';
import { User } from '@Models/User';

export const index: RequestHandler = async (req, res) => {
  const users = await User.query().orderBy('id', 'ASC');
  res.render('users/index', { title: 'All Users', users: users });
};
