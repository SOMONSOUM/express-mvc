import { config } from 'dotenv';
config();

// all constants variables
const SESSION_LIFETIME = 1000 * 60 * 60 * 2;

export const SessionConfig: any = {
  name: process.env.SESSION_NAME,
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: SESSION_LIFETIME,
    secure: process.env.NODE_ENV,
    sameSite: true,
    httpOnly: true,
  },
};
