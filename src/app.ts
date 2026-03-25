import express from 'express';
import { configDotenv } from 'dotenv';
import { globalError } from './middleware/errorHandler';
configDotenv();

const app = express();

// middleware

// || All routes ||
app.use();

// global error middleware should be LAST
app.use(globalError);

export default app;
