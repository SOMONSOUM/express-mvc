import { RequestHandler, Request, Response, NextFunction } from 'express';
import yup from 'yup';
import hash from 'password-hash';
import { User } from '@Models/User';

const schema = yup.object().shape({
  username: yup.string().trim().min(2).required('It can not be empty'),
  email: yup.string().trim().email().required('It can not be empty'),
  password: yup
    .string()
    .min(8)
    .max(200)
    .matches(/[^A-Za-z0-9]/, 'Password must contain a special character')
    .matches(/[A-z]/, 'Password must contain an uppercase letter')
    .matches(/[a-z]/, 'Password must contain a lowercase letter')
    .matches(/[0-9]/, 'Password must contain a number')
    .required(),
  phone_number: yup
    .string()
    .matches(/[0-9]/, 'Phone number must contain number only')
    .required(),
});

const errorMessages = {
  invalidLogin: 'Invalid login.',
  emailInUse: 'Email in use.',
};

export const authenticate: RequestHandler = async (req, res, next) => {
  console.log(req.session?.id);
  if (req.session && req.session?.id) {
    next();
  } else {
    res.status(401).json({ message: 'Please signup or login first!' });
  }
};

/**
 * @description
 * @param req
 * @param res
 */
export const signup = async (req: Request, res: Response) => {
  const credentials = req.body;
  const { username, email, password, phone_number } = credentials;
  if (email && password == undefined) {
    console.log(errorMessages.invalidLogin);
  }

  const hashPassword = hash.generate(credentials.password);
  credentials.password = hashPassword;
  try {
    await schema.validate(credentials, { abortEarly: false });
    const user = await User.query().insert(credentials);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

/**
 * @description
 * @param req
 * @param res
 */
export const signin = async (req: Request, res: Response) => {
  try {
    // TODO: ...
  } catch (error) {}
};
