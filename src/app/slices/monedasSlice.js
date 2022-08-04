import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monedas: [],
  monedaSeleccionada: null,
  idMonedaSeleccionada: 0,
  selCompraVenta: 0,
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
      console.log("setTransaccionesPorMoneda", payload)
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
