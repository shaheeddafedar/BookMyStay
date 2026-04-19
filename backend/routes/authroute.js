import express from "express"
import { singUp } from "../controllers/authcontroller.js"

const authRouter = express.Router()

authRouter.post("/singup",singUp)

export default authRouter;