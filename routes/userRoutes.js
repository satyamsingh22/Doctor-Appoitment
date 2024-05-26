const express = require('express')
const { registerController, loginController, authController,applyDoctorController,getAllNotificationController,deleteAllNotificationController, getAllDoctorsController,  bookeAppointmnetController, bookingAvailabilityController, userAppointmentsController } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')



//router object


const router = express.Router()
//Login || POST
router.post('/login',loginController)



//routes
router.post('/register',registerController)

// Auth || POST
router.post('/getUserData', authMiddleware, authController);
// APPLY DOCTOR || POST
router.post('/applydoctor', authMiddleware, applyDoctorController);

//Notofication Doctor || POST


router.post('/get-all-notification', authMiddleware, getAllNotificationController);


router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController);


router.get('/getAllDoctors', authMiddleware, getAllDoctorsController); // Check if this route is correctly defined


//Book appointement


router.post("/book-appointment", authMiddleware, bookeAppointmnetController);


//booking availblity 
router.post('/booking-availbility',authMiddleware,bookingAvailabilityController)


//Appoitment list


router.get('/user-appointments',authMiddleware,userAppointmentsController)



module.exports = router;