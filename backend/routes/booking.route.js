import express from "express";
import isAuth from "../middleware/isAuth.js";
import { createBooking } from "../controllers/booking.controller.js";



let bookingRouter = express.Router()

bookingRouter.post("/create/:id",isAuth,createBooking)


export default bookingRouter