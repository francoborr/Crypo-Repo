import { createSlice } from "@reduxjs/toolkit";

const initialState={
    monedas:[]
}

export const monedasSlice = createSlice({
    name: 'monedas',
    initialState,
    reducers:{
        setMonedas:(state, action)=>{
            const {payload} = action;
            state.monedas = payload
        },
    }
})

export const{setMonedas} = monedasSlice.actions;
export default monedasSlice.reducer;