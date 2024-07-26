import express from 'express';

import PatientContoller from '../controllers/patientController.js';

// initializing express router
const patientRouter = express.Router();
// initializing the controlller
const patientContoller = new PatientContoller();
// to register a patient
patientRouter.post('/register', (req, res, next) => {
    patientContoller.registerPatient(req, res, next);
});
// to create a report for a patient
patientRouter.post('/:id/create-report', (req, res, next) => {
    patientContoller.createReport(req, res, next);
});
// to get all reports of a specific patient
patientRouter.get('/:id/all-reports', (req, res, next) => {
    patientContoller.getAllReports(req, res, next);
});

export default patientRouter;