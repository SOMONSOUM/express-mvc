import { Router } from 'express';
import { signup, signin } from '@Controllers/AuthController';

export const userRoutes = Router();

// user authentication
userRoutes.post('/signup', signup);
userRoutes.post('/signin', signin);
