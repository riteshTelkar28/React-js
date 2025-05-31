import express from 'express';
import { addStudentController, deleteStudentController,  loginStudentController, updateStudentController, viewStudentController } from '../controller/studentController.js';

var studentRouter = express.Router();

studentRouter.post("/addStudent",addStudentController);
studentRouter.post("/login",loginStudentController);
studentRouter.get("/viewStudent",viewStudentController);
studentRouter.post("/updateStudent",updateStudentController);
studentRouter.post("/deleteStudent",deleteStudentController)

export default studentRouter;