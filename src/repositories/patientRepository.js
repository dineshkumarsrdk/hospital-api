import { patientModel } from "../models/patientModel.js";
import { reportModel } from "../models/reportModel.js";

export default class PatientRepository {
    // to register a patient
    async registerPatient(patientName, mobile) {
        try {
            const patientAlreadyExists = await patientModel.findOne({ mobile: mobile });
            if (patientAlreadyExists) {
                return {
                    success: true,
                    message: 'Patient already registered',
                    response: patientAlreadyExists
                }
            } else {
                const newPatient = new patientModel({ patientName: patientName, mobile: mobile });
                await newPatient.save();
                return {
                    success: true,
                    message: 'Registeration successfull',
                    response: newPatient
                }
            }
        } catch (error) {
            return {
                success: false,
                error: { message: error, statusCode: 400 }
            };
        }
    }

    // to create report for a patient 
    async createReport(doctorId, patientId, reportStatus) {
        try {
            const newReport = new reportModel({ createdByDoctor: doctorId, patient: patientId, status: reportStatus });
            await newReport.save();
            return {
                success: true,
                response: newReport
            }
        } catch (error) {
            return {
                success: false,
                error: { message: error, statusCode: 400 }
            };
        }
    }

    // to get all reports of a specific patient
    async getAllReports(patientId) {
        try {
            // checking if the patient exists or not
            const patientExists = await patientModel.findById(patientId);
            if (patientExists) {
                const reports = await reportModel.find(
                    {patient: patientId}).populate('patient');
                return {
                    success: true,
                    response: reports
                }
            } else {
                return {
                    success: false,
                    error: { message: 'Patient does not exists', statusCode: 404 }
                };
            }
        } catch (error) {
            return {
                success: false,
                error: { message: error, statusCode: 400 }
            };
        }
    }
}