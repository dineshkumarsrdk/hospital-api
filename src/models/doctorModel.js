import mongoose from "mongoose";
// defining the schema for doctor
const doctorSchema = new mongoose.Schema({
    // user name of doctor
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const doctorModel = mongoose.model('doctor', doctorSchema);