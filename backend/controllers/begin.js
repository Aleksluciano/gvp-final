const User = require("../models/user");
const Patient = require("../models/patient");
const Report = require("../models/report");

exports.countObjects = async (req, res, next) => {

  countedUser = await User.find().countDocuments();
  countedPatient = await Patient.find().countDocuments();
  countedReport = await Report.find().countDocuments();;

 countData = {
   countUser: countedUser,
   countPatient: countedPatient,
   countReport: countedReport
 }
  res.status(200).json({
   countData: countData
  });

}
