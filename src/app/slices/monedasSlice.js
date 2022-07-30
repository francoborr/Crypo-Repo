import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monedas: [],
  monedaSeleccionada: null,
  idMonedaSeleccionada: 0,
  selCompraVenta: 0,
};

export const monedasSlice = createSlice({
  name: "monedas",
  initialState,
  reducers: {
    setMonedas: (state, action) => {
      const { payload } = action;
      state.monedas = payload;
    },
    setMonedaSeleccionada: (state, action) => {
      const { payload } = action;
      state.monedaSeleccionada = payload;
      console.log("setMonedaSeleccionada ", payload);
    },
    setIdMonedaSeleccionada: (state, action) => {
      const { payload } = action;
      state.idMonedaSeleccionada = payload;
      console.log("setIdMonedaSeleccionada ", payload);
    },
    setSelCompraVenta: (state, action) => {
      const { payload } = action;
      state.selCompraVenta = payload;
      console.log("setSelCompraVenta ", payload);
    },
  },
});

export const {
  setMonedas,
  setMonedaSeleccionada,
  setIdMonedaSeleccionada,
  setSelCompraVenta,
} = monedasSlice.actions;
export default monedasSlice.reducer;
