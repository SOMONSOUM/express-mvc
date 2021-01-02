import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

interface Error {
  status?: number;
  message?: String;
}

export const errorHandler = (error: Error, req: Request, res: Response) => {
  res.status(error.status || 500);
  res.render('errors/error', {
    message: error.message,
    error: error,
    title: error.message,
  });
};
