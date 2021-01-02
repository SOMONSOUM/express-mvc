import { Router } from 'express';
import { index } from '@Controllers/UsersController';
import { signup, signin } from '@Controllers/AuthController';

export const authRoutes = Router();

// user authentication
// routes.post('/signup', signup),
// routes.post('/signin', signin)
