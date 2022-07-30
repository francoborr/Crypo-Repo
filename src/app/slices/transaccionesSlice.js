import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transacciones: [],
  transaccionesDescripcion: [],
};

export const transaccionesSlice = createSlice({
  name: "transacciones",
  initialState,
  reducers: {
    setTransacciones: (state, action) => {
      const { payload } = action;
      console.log("setTransacciones", payload);
      state.transacciones = payload;
    },

    addTransaccion: (state, action) => {
      const { payload } = action;
      state.transacciones = [...state.transacciones, payload];
    },
    setTransaccionesDescripcion: (state, action) => {
      const { payload } = action;
      state.transaccionesDescripcion = payload;
    },
  },
});

export const { setTransacciones, setTransaccionesDescripcion } =
  transaccionesSlice.actions;
export default transaccionesSlice.reducer;
