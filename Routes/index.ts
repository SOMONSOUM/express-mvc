import { Router } from 'express';
import { userRoutes } from './users';
import { authenticate } from '@Controllers/AuthController';
import { authRoutes } from './auth';

export const routes = Router();

routes.use(authRoutes);
routes.use(authenticate, userRoutes);
