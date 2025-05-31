import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students:[],
    selectedStudent:{},
    index:-1,
    loginStatus:false,
    navShow:"Home"
}
const studentSlice = createSlice({
    name:"StudentSlice",
    initialState,
    reducers:{
        addStudent:(state,action)=>{
            if(state.index ==-1){
                state.students = [...state.students,action.payload];
            }else{
                state.students.splice(state.index,1,action.payload)  
            }
        },
        loginStudent:(state,action)=>{
                const res = state.students.filter((stud)=>{
                    return (stud.email == action.payload.email) && (stud.password == action.payload.password);
                })
                
                if(res.length!=0){
                    state.loginStatus = true;
                    state.navShow = "Login";
                }else{
                    state.loginStatus = false;
                }
        },

        logoutStudent:(state)=>{
            state.loginStatus = false;
            state.navShow = "Home";
        
        },
        deleteStudent:(state,action)=>{
            state.students.splice(action.payload,1);
            console.log("state.students ",state.students);
        },
        updateStudent:(state,action)=>{
            state.selectedStudent = action.payload;
            state.index = action.payload.index;
            console.log("action.payload.index ",action.payload.index);

        }
    }

});

export const {addStudent,loginStudent,logoutStudent,deleteStudent,updateStudent} = studentSlice.actions;
export default studentSlice.reducer;