import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import i18n from 'i18next';
import i18nFsBackend from 'i18next-node-fs-backend';
import i18nMiddleware from 'i18next-express-middleware';
import logger from 'morgan';
import helmet from 'helmet';
import path from 'path';
import compression from 'compression';
import session from 'express-session';
import { SessionConfig } from 'lib/Session';
import { routes } from '@Routes/index';

// invoke express or call on express
export const app = express();

i18n
  .use(i18nFsBackend)
  .use(i18nMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: __dirname + '/locales/{{lng}}.json',
      addPath: __dirname + '/locales/{{lng}}.missing.json',
    },
    fallbackLng: 'en',
    lowerCaseLng: true,
    preload: ['en', 'kh'],
    saveMissing: true,
  });
app.use(
  i18nMiddleware.handle(i18n, {
    removeLngFromUrl: false,
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'pug');

// routes setup
app.use(routes);

// middlewares setup
app.use(helmet());
app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(SessionConfig));

// root route
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
interface Error {
  status?: number;
  message?: string;
}

// handle maltipulate data errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.render('errors/error', {
    message: err.message,
    error: err,
    title: err.message,
  });
});
