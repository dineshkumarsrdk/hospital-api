import mongoose from "mongoose";
// defining the schema for patient report
const reportSchema = new mongoose.Schema({
    // reference to doctor who created the report
    createdByDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor',
        required: true
    },
    // patient 
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient',
        required: true
    },
    // covid status
    status: {
        type: String,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        required: true
    },
    // date of report
    reportDate: {
        type: Date,
        default: Date.now
    }
});

export const reportModel = mongoose.model('report', reportSchema);