import express from "express";
import isAuth from "../middleware/isauth";
import { getcurrentUser } from "../controllers/usercontroller";

let userRouter = express.Router();

userRouter.get("/currentuser", isAuth, getcurrentUser);

export default userRouter;
