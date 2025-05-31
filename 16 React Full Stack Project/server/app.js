import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './router/userRouter.js';
import adminRouter from './router/adminRouter.js';
import cors from 'cors';

var app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static('public'));
app.use(cookieParser());


app.use("/user",userRouter);
app.use("/admin",adminRouter);

app.listen(3001,()=>{
    console.log("server connection successfull");
})