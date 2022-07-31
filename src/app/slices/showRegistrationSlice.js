import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRegistration: false,
};

export const showRegistrationSlice = createSlice({
  name: "showRegistration",
  initialState,
  reducers: {
    setShowRegistration: (state, action) => {
      const { payload } = action;
      state.showRegistration = payload;
    },
  },
});

export const { setShowRegistration } = showRegistrationSlice.actions;
export default showRegistrationSlice.reducer;
