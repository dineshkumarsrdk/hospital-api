import CustomError from '../middlewares/errorHandler.js';
import PatientRepository from '../repositories/patientRepository.js';

export default class PatientContoller {
    constructor() {
        this.patientRepository = new PatientRepository();
    }

    // to register a patient
    async registerPatient(req, res, next) {
        const { patientName, mobile } = req.body;
        const status = await this.patientRepository.registerPatient(patientName, mobile);
        if(status) {
            res.status(200).json({
                success: true,
                message: status.message,
                response: status.response
            });
        } else {
            next(new CustomError(status.error.message, status.error.statusCode));
        }
    }

    // to create report for a patient 
    async createReport(req, res, next) {
        // report status
        const reportStatus = req.body.status;
        // patient id
        const patientId = req.params.id;
        // doctor id, from jwt
        const doctorId = req.userId
        const status = await this.patientRepository.createReport(doctorId, patientId, reportStatus);
        if(status) {
            res.status(200).json({
                success: true,
                message: 'Report created successfully',
                response: status.response
            });
        } else {
            next(new CustomError(status.error.message, status.error.statusCode));
        }
    }

    // to get all reports of a specific patient
    async getAllReports(req, res, next) {
        const patientId = req.params.id;
        const status = await this.patientRepository.getAllReports(patientId);
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