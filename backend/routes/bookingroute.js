import express from "express"


import isAuth from "../middleware/isauth.js"
import { cancelBooking, createBooking, getBooking } from "../controllers/bookingcontroller.js"

let bookingRouter = express.Router()

bookingRouter.post("/create/:id",isAuth,createBooking)
bookingRouter.delete("/cancel/:id",isAuth,cancelBooking)
bookingRouter.get("/:id", isAuth,getBooking);

export default bookingRouter