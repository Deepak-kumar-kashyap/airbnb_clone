import express, { response } from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import userRouter from "./routes/user.route.js";


dotenv.config()


let port=process.env.PORT || 6000

let app=express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))


app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)



app.listen(port,()=>{
    connectDB()
    console.log("server started on port 8000");
})