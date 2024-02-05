import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password:{
        type:String,
        required:true
    },

}, {timestamps:true})

//create model
const User = mongoose.model('User',userSchema)

export default User // to use it in other parts of application to access db