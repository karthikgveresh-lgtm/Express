import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({}, { timestaps: true })

export const Patient = mongoose.model("Patient", patientSchema)