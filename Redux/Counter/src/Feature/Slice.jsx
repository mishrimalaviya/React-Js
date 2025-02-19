import { createSlice } from "@reduxjs/toolkit";

export const sl = createSlice({
    name : "counter",
    initialState :{count :0},
    reducers :{
        incre:(state)=>{
            state.count+=1
        },

        decre:(state)=>{
            if(state.count < 1)
            {
                alert("value cannot decrease below zero")
                return
            }
            state.count-=1
        }
    }

    
})

export const {incre,decre}= sl.actions
export default sl.reducer