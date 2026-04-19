//externalmodule
import express from 'express'
import dotenv from "dotenv"
import dns from "dns"

//localmoduel
import connectDb from './config/db.js';
import authRouter from './routes/authroute.js';

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
dotenv.config()



let port = process.env.PORT || 5000


const app = express()

app.use("/api/auth",authRouter)

app.listen(port,()=>{
    connectDb();
    console.log("server started http://localhost:3000/");

})