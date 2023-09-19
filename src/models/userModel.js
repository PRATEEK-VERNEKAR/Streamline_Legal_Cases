import mongoose from  "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required"],
    },
    post:{
        type:String,
        required:[true,"Post is required"]
    },
    email:{
        type:String,
        required:[true,"Email Required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Password Required"],
    },
},{timestamps:true})


const User=mongoose.models.User || mongoose.model("User",userSchema);

export default User;
