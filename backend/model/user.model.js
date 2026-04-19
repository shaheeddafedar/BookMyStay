import mongoose from "mongoose";

const usersechema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
     password:{
        type:String,
        require:true
    },
    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing"
    },
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    }
},{timestamps:true})

const User = mongoose.model("User",usersechema)

export default User
