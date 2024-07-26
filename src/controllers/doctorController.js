import DoctorRepository from '../repositories/doctorRepository.js';
import CustomError from '../middlewares/errorHandler.js';
import jwt from 'jsonwebtoken';

export default class DoctorContoller {
    constructor() {
        this.doctorRepository = new DoctorRepository();
    }

    // to register a doctor
    async registerDoctor(req, res, next) {
        const { userName, password } = req.body;
        const status = await this.doctorRepository.registerDoctor(userName, password);
        if (status.success) {
            res.status(200).json({
                success: true,
                message: "Registeration successfull",
                response: status.response
            });
        } else {
            next(new CustomError(status.error.message, status.error.statusCode));
        }
    }

    // to sigin doctor
    async signinDoctor(req, res, next) {
        const { userName, password } = req.body;
        const status = await this.doctorRepository.signinDoctor(userName, password);
        if (status.success) {
            const token = jwt.sign(
                {
                    userId: status.response
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1h'
                }
            );
            res.status(200).cookie('jsonwebtoken', token, {maxAge: 1*60*60*1000, httpOnly: true})
                .json({
                    success: true,
                    message: "Loggedin successfully"
                });
        } else {
            next(new CustomError(status.error.message, status.error.statusCode));
        }
    }
}