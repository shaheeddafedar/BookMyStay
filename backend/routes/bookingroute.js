import express from "express"


import isAuth from "../middleware/isauth.js"
import { createBooking } from "../controllers/bookingcontroller.js"

let bookingRouter = express.Router()

bookingRouter.post("/create",isAuth,createBooking)

export default bookingRouter