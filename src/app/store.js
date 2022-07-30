import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import departamentosReducer from './slices/deptoSlice';
import monedasReducer from './slices/monedasSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        departamentos : departamentosReducer,
        monedas: monedasReducer,
    }
});


export default store;