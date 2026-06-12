//externalmodule
import express from "express";
import dotenv from "dotenv";
import dns from "dns";
import cors from "cors";
import cookieParser from "cookie-parser";


//localmoduel
import connectDb from "./config/db.js";
import authRouter from "./routes/authroute.js";
import userRouter from "./routes/userroute.js";
import listingRouter from "./routes/listingroute.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

let port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);

app.listen(port, () => {
  connectDb();
  console.log(`server started http://localhost:${port}`);
});
