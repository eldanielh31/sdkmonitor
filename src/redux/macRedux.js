import { createSlice } from "@reduxjs/toolkit";

export const macSlice = createSlice({

    name: "mac",
    initialState:{
        macs: [],
        isFetching: false,
        error: false
    },
    reducers: {
        //GET ALL
        setMacStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        setMacSuccess: (state, action)=>{
            state.isFetching = false;
            state.macs = action.payload;
        },
        setMacFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteMacStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        deleteMacSuccess: (state, action)=>{
            state.isFetching = false;
            state.macs.splice(
                state.macs.findIndex((item)=> item._id === action.payload),
                1
            );
        },
        deleteAllMacSuccess: (state, action) => {
            state.isFetching = false;
            state.macs = [];
        },
        deleteMacFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        updateMacStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        updateMacSuccess: (state, action)=>{
            state.isFetching = false;
            state.macs[state.macs.findIndex((item)=> item._id === action.payload.id)] = action.payload.Mac;
        },
        updateMacFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    setMacStart, setMacSuccess, setMacFailure, 
    deleteMacStart, deleteMacSuccess, deleteMacFailure, deleteAllMacSuccess,
    updateMacFailure, updateMacStart, updateMacSuccess,
    addMacFailure, addMacStart, addMacSuccess,
} = macSlice.actions;

export default macSlice.reducer;