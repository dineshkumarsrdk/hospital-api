// importing required packages
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// importing routers
import doctorRouter from './src/routes/doctorRouter.js';
import patientRouter from './src/routes/patientRouter.js';
import reportRouter from './src/routes/reportRouter.js';
import { connectToMongoDB } from './src/config/mongodb.js';
import { appLevelErrorHandlerMiddleware } from './src/middlewares/errorHandler.js';
import { jwtAuth } from './src/middlewares/jwtAuth.js';

// configuring dotenv
dotenv.config();
// initializing express app
const app = express();

const port = process.env.PORT || 5000;
// body parser - to parse the req body and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// to parse cookies
app.use(cookieParser());

// application routes
app.use('/api/doctors', doctorRouter);
app.use('/api/patients', jwtAuth, patientRouter);
app.use('/api/reports', jwtAuth, reportRouter);

// application level error handler middleware
app.use(appLevelErrorHandlerMiddleware);

app.listen(port, ()=>{
    console.log('Server is listening on port: '+port);
    connectToMongoDB();
});