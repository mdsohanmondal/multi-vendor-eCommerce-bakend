import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
// import helmet from 'helmet';
import morgan from 'morgan';
import routes from './modules';
import { globalError } from './middleware/error.middleware';
const app = express();

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// security
app.use(cors());
// app.use(helmet());

// logging
app.use(morgan('dev'));

// routes
app.use('/api/v1', routes);

// error handler
app.use(globalError);

export default app;
