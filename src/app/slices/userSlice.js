import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      const { payload } = action; //Me quedo con el usuario que llega
      state.user = payload;
      console.log("Usuario logeado");
    },
    setLogoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setLoginUser, setLogoutUser } = userSlice.actions;
export default userSlice.reducer;
