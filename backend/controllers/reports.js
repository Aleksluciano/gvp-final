const Report = require("../models/report");
const Patient = require("../models/patient");

exports.createReport = async (req, res, next) => {

  const report = new Report({
   typeReport: req.body.typeReport,
   patientId: req.body.patientId,
   patientName: req.body.patientName,
   assitantId: req.body.assistantId,
   visitDate: req.body.visitDate,
   gvpId1: req.body.gvpId1,
   gvpName1: req.body.gvpName1,
   gvpId2: req.body.gvpId2,
   gvpName2: req.body.gvpName2,
   description: req.body.description
  });

  savedReport = await report.save();

  res.status(201).json({
    message: "Report created!",
    report: savedReport
  });

}




exports.updateReport = async (req, res, next) => {

  const report = new Report({
    _id: req.body.id,
    typeReport: req.body.typeReport,
   patientId: req.body.patientId,
   patientName: req.body.patientName,
   assitantId: req.body.assistantId,
   visitDate: req.body.visitDate,
   gvpId1: req.body.gvpId1,
   gvpName1: req.body.gvpName1,
   gvpId2: req.body.gvpId2,
   gvpName2: req.body.gvpName2,
   description: req.body.description
  });


  updatedReport = await Report.updateOne( {_id: req.params.id}, report);

  if (updatedReport.n > 0) {
    res.status(200).json({
      message: "Update successful!"
    });
  } else {
    res.status(401).json({
      message: "Not authorized!"
    });
  }

};




exports.getReports = async (req, res, next) => {


  const fetchedReports = await Report.find();

  res.status(200).json({
    message: "Reports fetched successfully!",
    reports: fetchedReports
  });

}




exports.deleteReport = async(req, res, next) => {

  const deletedReport = await Report.deleteOne({
       _id: req.params.id
    })

      if (deletedReport.n > 0) {

        const selectedPatient = await Patient.findById({_id: req.query.patientId })
        selectedPatient.report.pull(req.params.id);
        selectedPatient.save();


        res.status(200).json({
          message: "Deletion successful!"
        });
      } else {
        res.status(401).json({
          message: "Not authorized!"
        });
      }


};

exports.getOneReport = async (req, res, next) => {

  const fetchedReport = await Report.findById({_id: req.params.id });

  res.status(200).json({
    message: "Report fetched successfully!",
    report: fetchedReport
  });

}
