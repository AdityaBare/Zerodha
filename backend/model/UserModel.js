const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email : {
        type:String,
        required:[true,"Your email address is required"],
        unique : [true,"Your email address shoulld unique"],
        lowercase :true
    },
    username : {
        type:String,
        required: [true,"Username is required"]
    },
    password :{
        type:String,
        required : [true,"Password is required"],
    },
    phone :{
         type: String,
        required :true
    },
    otp:{
        code:String,
           expiresAt: Date  

    },
    createdAt: {
    type: Date,
    default: new Date(),
  },
    
});
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);
