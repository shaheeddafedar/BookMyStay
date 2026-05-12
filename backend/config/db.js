import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
      await mongoose.connect(process.env.Mangodb)
      console.log("database connected")
    } catch(error){
    console.log("Database error",error)
    }
}

export default connectDb;