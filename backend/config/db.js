import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
      await mongoose.connect(process.env.Mangodb)
      console.log("db connected")
    } catch(error){
    console.log("Databaseerror",error)
    }
}

export default connectDb;