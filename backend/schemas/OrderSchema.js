const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    name :String,
    qty:Number,
    price:Number,
    mode:String,
});

module.exports=OrderSchema;