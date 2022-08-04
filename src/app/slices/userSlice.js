import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      const { payload } = action; //Me quedo con el usuario que llega
      state.user = payload;      
      localStorage.setItem('user',JSON.stringify(payload))
    },
    setLogoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user')
    },    
  },
});

export const { setLoginUser, setLogoutUser } = userSlice.actions;
export default userSlice.reducer;
