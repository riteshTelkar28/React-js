import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    counterTitle:"this is counter title",
    tagTitle:"this is tag title",
    count:100
}

const UserSlice = createSlice({
    name:"UserSlice",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        },
        incrementByThree:(state,action)=>{
            state.count += action.payload
        },
        setTagTitle:(state,action)=>{
            console.log("action ",action)
            state.tagTitle = action.payload
        }
    }
});

export const {increment,decrement,reset,incrementByThree,setTagTitle} = UserSlice.actions; //create action creaters for this funtions

export default UserSlice.reducer; // reducer jis data se deal kr raha h usse store me set kr denge
