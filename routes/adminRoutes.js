const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getAllUsersController, getAllDoctorController,changeAccountStatusController } = require('../controllers/adminCtrl')



const router = express.Router()


//get method user get


router.get('/getAllUsers',authMiddleware,getAllUsersController)


//Doctor get
router.get('/getAllDoctors',authMiddleware,getAllDoctorController)


// acount status || post


router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)



module.exports = router