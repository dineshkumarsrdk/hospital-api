import express from 'express';

import DoctorContoller from '../controllers/doctorController.js';

// initializing express router
const doctorRouter = express.Router();
// initializing the controlller
const doctorContoller = new DoctorContoller();
// to register a doctor
doctorRouter.post('/register', (req, res, next)=>{
    doctorContoller.registerDoctor(req, res, next);
});
// to sign in a doctor using userName and password
doctorRouter.post('/signin', (req, res, next)=>{
    doctorContoller.signinDoctor(req, res, next);
});

export default doctorRouter;