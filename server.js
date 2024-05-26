const express = require("express")
const colors = require('colors')
const moragan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const path = require('path')



//dotenv config
dotenv.config()

connectDB();


const app = express();




//middleware
app.use(express.json());//for parsing
app.use(moragan('dev'));


app.use('/api/v1/user',require('./routes/userRoutes'))
app.use('/api/v1/admin',require('./routes/adminRoutes'))
app.use('/api/v1/doctor',require('./routes/doctorRoutes'))


//static file
app.use(express.static(path.join(__dirname,'./clients/build')))

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,'./clients/build/index.html'))
})


//routes
app.get("/",(req,res)=>{
    res.status(200).send({
        message:"server running"
    });
});


const port = process.env.PORT || 8000



//PORT LISTEN
app.listen(port, (req,res)=>{
    console.log(`Server running in :${process.env.NODE_MODE} mode on port ${port}`.bgCyan.white)
});


