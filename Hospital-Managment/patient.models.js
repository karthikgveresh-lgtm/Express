import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    diagonsedWith: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHERS"],
        required: true
    },

    bloodGroup: {
        type: String,
        required: true
    },

    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }

}, { timestaps: true })

export const Patient = mongoose.model("Patient", patientSchema)