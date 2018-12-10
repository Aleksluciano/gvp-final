const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const patientSchema = mongoose.Schema({
   firstName: { type: String, required: true},
   lastName: { type: String, required: true},
   email: { type: String },
   mobilePhone: { type: String },
   phone: { type: String },
   cep: { type: String },
   state: { type: String, required: true  },
   city: { type: String, required: true },
   neighborhood: { type: String, required: true },
   address: { type: String, required: true },
   numeral: { type: Number, required: true },
   complement: { type: String },
   congregation: { type: String, required: true },
   mobileElder1: { type: String, required: true },
   mobileElder2: { type: String },
   phoneElder1: { type: String },
   phoneElder2: { type: String },
   caseDescription: { type: String},
   hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: true },
   hospitalizationDate: { type: Date, required: true},
   medicalRelease: { type: Date},
   accommodationId: { type: mongoose.Schema.Types.ObjectId, ref: "Accommodation"},
   infoWho: { type: String},
   report: [{type: mongoose.Schema.Types.ObjectId, ref: "Report"}]
});

patientSchema.index({ firstName: 1, lastName: 1}, { unique: true });

patientSchema.plugin(uniqueValidator, { message: 'O paciente já existe no sistema!' });

module.exports = mongoose.model("Patient", patientSchema);
