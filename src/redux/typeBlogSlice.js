import { createSlice } from '@reduxjs/toolkit';
const typeBlogSlice = createSlice({
  name: 'typeBlog',
  initialState: {
    typeBlog: {
      allType: null,
      isFetching: false,
      error: false,
    },
    handleType: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    getAllTypeBlogStart: (state) => {
      state.typeBlog.isFetching = true;
    },
    getAllTypeBlogSuccess: (state, action) => {
      state.typeBlog.allType = action.payload;
      state.typeBlog.isFetching = false;
    },
    getAllTypeBlogFail: (state) => {
      state.typeBlog.isFetching = false;
      state.typeBlog.error = true;
    },

    handleTypeBlogStart: (state) => {
      state.typeBlog.success = false;
      state.typeBlog.isFetching = true;
    },
    handleTypeBlogSuccess: (state) => {
      state.typeBlog.isFetching = false;
      state.typeBlog.success = true;
    },
    handleTypeBlogFail: (state) => {
      state.typeBlog.isFetching = false;
      state.typeBlog.error = true;
    },
  },
});

export const {
  getAllTypeBlogStart,
  getAllTypeBlogFail,
  getAllTypeBlogSuccess,
  handleTypeBlogFail,
  handleTypeBlogStart,
  handleTypeBlogSuccess,
} = typeBlogSlice.actions;
export default typeBlogSlice.reducer;
