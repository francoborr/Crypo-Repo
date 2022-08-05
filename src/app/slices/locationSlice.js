import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departamentos: [],
  ciudades:[],
};

export const locationSlice = createSlice({
  name: "monedas",
  initialState,
  reducers: {
    setDepartamentos: (state, action) => {
      const { payload } = action;
      state.departamentos = payload;
    },
    setCiudades: (state, action) => {
      const { payload } = action;
      state.ciudades = payload;
    },
  },
});

export const { setDepartamentos, setCiudades } = locationSlice.actions;
export default locationSlice.reducer;
