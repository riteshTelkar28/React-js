import mongoose from 'mongoose';
import url from '../connection/dbConnection.js';

mongoose.connect(url);

const studentSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

export default mongoose.model('studentSchema',studentSchema,'student');