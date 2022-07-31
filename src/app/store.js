import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import departamentosReducer from "./slices/deptoSlice";
import monedasReducer from "./slices/monedasSlice";
import transaccionesReducer from "./slices/transaccionesSlice";
import showRegistrationReducer from "./slices/showRegistrationSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    departamentos: departamentosReducer,
    monedas: monedasReducer,
    transacciones: transaccionesReducer,
    showRegistration: showRegistrationReducer,
  },
});

export default store;
