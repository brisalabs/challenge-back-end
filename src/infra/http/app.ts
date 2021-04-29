import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { router } from './routes';
import '../database';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

export { app };
