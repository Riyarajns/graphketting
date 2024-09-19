const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new  mongoose.Schema({
    userName:{
        type:String,
        required:[true,"name is required"],
    },
    email:{
        type:String,
        required:[true, "email is required"]
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    phone:{
        type:String,
        required:[true, "phone number is required"]
    },
    
},{timestamps:true})
 userSchema.pre("save", async function (next) {
      if(!this.isModified("password")) return next();
    
      this.password = await bcrypt.hash(this.password, 10)
      next()
    })

module.exports = mongoose.model("user", userSchema);