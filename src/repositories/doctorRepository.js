import cookieParser from "cookie-parser";
import { doctorModel } from "../models/doctorModel.js";
import { compareHashedPassword, hashPassword } from '../utils/passwordEncrption.js';

export default class DoctorRepository {
    // to register a doctor
    async registerDoctor(userName, password) {
        try {
            const userAlreadyExist = await doctorModel.findOne({ userName: userName });
            if (userAlreadyExist) {
                return {
                    success: false,
                    error: { message: "User already exists, please login to continue", statusCode: 400 }
                };
            } else {
                const hashedPassword = await hashPassword(password);
                const newUser = new doctorModel({ userName: userName, password: hashedPassword });
                await newUser.save();
                return {
                    success: true,
                    response: newUser
                }
            }
        } catch (error) {
            return {
                success: false,
                error: { message: error, statusCode: 400 }
            };
        }
    }

    // to sigin doctor
    async signinDoctor(userName, password) {
        try {
            // checking if the user is registered
            const user = await doctorModel.findOne({ userName });
            if (user) {
                if (await compareHashedPassword(password, user.password)) {
                    // if user name and password is valid
                    return {
                        success: true,
                        response: user._id
                    }
                } else {
                    // if password is invalid
                    return {
                        success: false,
                        error: { message: "Invalid credentials", statusCode: 400 }
                    }
                }
            } else {
                // if user not registered
                return {
                    success: false,
                    error: { message: "User not found", statusCode: 404 },
                }
            }
        } catch (error) {
            return {
                success: false,
                error: { message: error, statusCode: 400 }
            };
        }
    }
}