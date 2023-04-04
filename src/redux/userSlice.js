import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
    },
    loginFail: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
  },
});

export const { loginFail, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
