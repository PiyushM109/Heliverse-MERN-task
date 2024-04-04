import { createSlice } from "@reduxjs/toolkit";


const teamSlice = createSlice({
    name : 'team',
    initialState : {
        users:[]
    },
    reducers : {
        addUser: (state, action) =>{
            state.users.push(action.payload);
        },
        removeUser: (state=initialState,action) =>{
            return {...state,
                users: state.users.filter(item => item?._id !== action.payload?._id)}
            
        },
        clearUser: (state) =>{
            state.users.length=0;
        }
    }

});

export const{addUser, removeUser, clearUser} = teamSlice.actions;

export default teamSlice.reducer;