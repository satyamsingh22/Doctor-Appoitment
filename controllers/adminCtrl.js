const doctotModel = require('../models/doctorModel');
const userModel = require('../models/userModels')





const getAllUsersController = async(req,res)=>{
try{
    const users = await userModel.find({})
    res.status(200).send({
        success:true,
        message:'users data',
        data:users
    })

}catch(error){
    console.log(error)
    res.status(500).send({
        success:false,
        message:'error while featching users',
        error
    })
}


}





const getAllDoctorController = async(req,res)=>{
    try{

        const doctors = await doctotModel.find({})
        res.status(200).send({
            success:true,
            message:"Doctor data list",
            data:doctors
        })

    }catch{
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error while featching doctor data",
            error
        })
    }
}

//doctor account status

const changeAccountStatusController =async(req,res)=>{
    try{
        const{doctorId, status} = req.body
        const doctor = await doctotModel.findByIdAndUpdate(doctorId,{status})
        const user = await userModel.findOne({_id:doctor.userId})
        const notifcation = user.notifcation
        notifcation.push({
            type:'doctor-account-request-updated',
            message:`Your Doctor Account Request has ${status}`,
            onClickPath:'/notification'
        })


        user.isDoctor = status === 'approved' ? true : false
        await user.save()
        res.status(201).send({
            success:true,
            message:"Account status Updated",
            data: doctor,
        })


    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in account Status',
            error
        })
    }
}


module.exports = {getAllUsersController,getAllDoctorController,changeAccountStatusController}