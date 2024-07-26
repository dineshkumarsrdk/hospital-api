import ReportRepository from '../repositories/reportRepository.js';

export default class ReportContoller {
    constructor() {
        this.reportRepository = new ReportRepository();
    }

    // to get all the reports of all the patients filtered by a specific status
    async filterReportsByStatus(req, res, next) {
        const reportStatus = req.params.status;
        const status = await this.reportRepository.filterReportsByStatus(reportStatus);
        if(status) {
            res.status(200).json({
                success: true,
                response: status.response
            });
        } else {
            next(new CustomError(status.error.message, status.error.statusCode));
        }
    }
}