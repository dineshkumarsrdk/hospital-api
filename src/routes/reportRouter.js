import express from 'express';

import ReportContoller from '../controllers/reportController.js';

// initializing express router
const reportRouter = express.Router();
// initializing the controlller
const reportContoller = new ReportContoller();
// to get all the reports of all the patients filtered by a specific status
reportRouter.get('/:status', (req, res, next)=>{
    reportContoller.filterReportsByStatus(req, res, next);
});

export default reportRouter;