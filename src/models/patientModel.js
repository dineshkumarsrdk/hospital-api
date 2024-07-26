import mongoose from "mongoose";
// defining the schema for patient
const patientSchema = new mongoose.Schema({
    // nmae of the patient
    patientName: {
        type: String,
        required: true
    },
    // mobile number of the patient
    mobile: {
        type: Number,
        required: true
    }
});

export const patientModel = mongoose.model('patient', patientSchema);