require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const cors = require("cors");
const bodyParser = require('body-parser')


const cookieParser = require('cookie-parser');
const router = require('./route/router');

const app = express();
const allowedOrigin = ['https://zerodha-frontend-wcr4.onrender.com', 'https://zerodha-dashboard-svys.onrender.com'];


app.use(cors({
  origin: function (origin,callback){
    if(!origin || allowedOrigin.includes(origin)){
      callback(null,true)
    }
    else{
      callback(new Error("not allowed by CROS"));
    }

  },
   methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/',router);




app.listen(3002,()=>{
    console.log("App on port 5173");
    mongoose.connect(url);
    console.log("DB is connected")

})