import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monedas: [],
  comprasPorMoneda: [],
  ventasPorMoneda: [],
  transaccionesPorMoneda:[],
  monedasConSusTransacciones:[]
};

export const monedasSlice = createSlice({
  name: "monedas",
  initialState,
  reducers: {
    setMonedas: (state, action) => {
      const { payload } = action;
      state.monedas = payload;
    },
    setCompraPorMoneda :(state, action) =>{
      const {payload} = action;
      state.comprasPorMoneda = payload;
    },
    setVentaPorMoneda :(state, action) =>{
      const {payload} = action;
      state.ventasPorMoneda = payload;
    },
    setTransaccionesPorMoneda:(state, action)=>{
      const {payload} = action;
      state.transaccionesPorMoneda = payload;      
    },

    setMonedasConTodasTransacciones:(state,action)=>{
      const {payload} = action;
      state.monedasConSusTransacciones = payload;
    }
  },
});

export const {
  setMonedas,
  setMonedaSeleccionada,
  setIdMonedaSeleccionada,
  setSelCompraVenta,
  setCompraPorMoneda,
  setVentaPorMoneda,
  setTransaccionesPorMoneda,
  setMonedasConTodasTransacciones
} = monedasSlice.actions;
export default monedasSlice.reducer;
