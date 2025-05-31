import { configureStore } from "@reduxjs/toolkit";
import studentSlice from '../store/studentSlice';
export default configureStore({
        reducer:{
                student:studentSlice
        }
});