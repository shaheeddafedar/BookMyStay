import express from "express";
import isAuth from "../middleware/isauth.js";
import { getcurrentUser } from "../controllers/usercontroller.js";

let userRouter = express.Router();

userRouter.get("/currentuser", isAuth, getcurrentUser);

export default userRouter;
