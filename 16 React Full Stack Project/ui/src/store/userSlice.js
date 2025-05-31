import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    selectedUser:{},
    index:-1,
    loginStatus:false,
    navShow:"Home"
}

const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            if(state.index === -1){
                state.users = [...state.users,action.payload];
            }else{
                state.users.splice(state.index,1,action.payload)  
            }
        },
        verifyUser:(state,action)=>{
            
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;