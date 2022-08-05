import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import locationReducer from "./slices/locationSlice";
import monedasReducer from "./slices/monedasSlice";
import transaccionesReducer from "./slices/transaccionesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationReducer,
    monedas: monedasReducer,
    transacciones: transaccionesReducer,
    //showRegistration: showRegistrationReducer,
  },
});

export default store;
