import { reportModel } from "../models/reportModel.js";

export default class ReportRepository {
    // to get all the reports of all the patients filtered by a specific status
    async filterReportsByStatus(reportStatus) {
        try {
            const reports = await reportModel.find({status: reportStatus}).populate('patient');
            return {
                success: true,
                response: reports
            }
        } catch (error) {
            return {
                success: false,
                error: {message: error, statusCode: 400}
            }
        }
    }
}