const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3004;
const {errorHandler} = require('./middleware/errorMiddleware')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Routers


//Error Handler
app.use(errorHandler);

//listen port
app.listen(port,()=>{
    console.log("server Started...",port);
})


mongoose.set('strictQuery', true); //dout neet to check
mongoose.connect("mongodb+srv://rajapandib29:Raja%401999@cluster0.vq5ct9x.mongodb.net/cmsnode?retryWrites=true&w=majority").then(()=>{
    console.log("db connected...");
}).catch((e)=>{
    console.log("db not connected",e);
})
