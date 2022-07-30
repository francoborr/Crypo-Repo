import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departamentos: [],
};

export const deptoSlice = createSlice({
  name: "monedas",
  initialState,
  reducers: {
    setDepartamentos: (state, action) => {
      const { payload } = action;
      state.departamentos = payload;
    },
  },
});

export const { setDepartamentos } = deptoSlice.actions;
export default deptoSlice.reducer;
