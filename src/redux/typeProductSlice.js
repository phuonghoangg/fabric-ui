import { createSlice } from '@reduxjs/toolkit';

const typeProductSlice = createSlice({
  name: 'typeProduct',
  initialState: {
    typeProduct: {
      allType: null,
      isFetching: false,
      error: false,
    },
    handleProduct: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    getAllTypeStart: (state) => {
      state.typeProduct.isFetching = true;
    },
    getAllTypeSuccess: (state, action) => {
      state.typeProduct.isFetching = false;
      state.typeProduct.allType = action.payload;
    },
    getAllTypeFail: (state) => {
      state.typeProduct.isFetching = false;
      state.typeProduct.error = true;
    },
    createTypeStart: (state) => {
      state.handleProduct.isFetching = true;
    },
    createTypeSuccess: (state) => {
      state.handleProduct.isFetching = false;
      state.handleProduct.success = true;
    },
    createTypeFail: (state) => {
      state.handleProduct.isFetching = false;
      state.handleProduct.error = true;
    },
    deleteTypeStart: (state) => {
      state.handleProduct.isFetching = true;
    },
    deleteTypeSuccess: (state) => {
      state.handleProduct.isFetching = false;
      state.handleProduct.success = true;
    },
    deleteTypeFail: (state) => {
      state.handleProduct.isFetching = false;
      state.handleProduct.error = true;
    },
  },
});

export const {
  getAllTypeFail,
  getAllTypeStart,
  getAllTypeSuccess,
  createTypeFail,
  createTypeStart,
  createTypeSuccess,
  deleteTypeFail,
  deleteTypeStart,
  deleteTypeSuccess,
} = typeProductSlice.actions;
export default typeProductSlice.reducer;
