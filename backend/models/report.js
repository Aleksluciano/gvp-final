const Patient = require("../models/patient");
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const reportSchema = mongoose.Schema({
   typeReport: { type: String, required: true },
   patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
   patientName: { type: String},
   assitantId: { type: mongoose.Schema.Types.ObjectId, ref: "Assistant" },
   visitDate: { type: Date},
   gvpId1: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
   gvpName1: { type: String},
   gvpId2: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
   gvpName2: { type: String},
   description: { type: String}
});

//Incrementa o código sequencial do report
reportSchema.plugin(AutoIncrement, {inc_field: 'code'});

//Incrementa o código sequencial do report
reportSchema.post('save', (report) => {

  Patient.findById({_id: report.patientId},  (err, patient) =>{
  patient.report.push(report._id);
  patient.save();
  })

});


module.exports = mongoose.model("Report", reportSchema);
