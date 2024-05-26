const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//Update PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  Get Siglr DOCtar INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//get appoitment
router.get('/doctor-appointments', authMiddleware, doctorAppointmentsController);

//POST Update Status

router.post("/update-status", authMiddleware, updateStatusController);


module.exports = router;