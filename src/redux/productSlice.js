import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: {
      allProduct: null,
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
    getAllProductStart: (state) => {
      state.products.isFetching = true;
    },
    getAllProductSucess: (state, action) => {
      state.products.isFetching = false;
      state.products.allProduct = action.payload;
    },
    getAllProductFail: (state) => {
      state.products.isFetching = false;
      state.products.error = true;
    },
    createProductStart: (state) => {
      state.handleProduct.isFetching = true;
    },
    createProductSuccess: (state) => {
      state.handleProduct.isFetching = false;
      state.handleProduct.success = true;
    },
    createProductFail: (state) => {
      state.handleProduct.isFetching = false;
      state.handleProduct.error = true;
    },
  },
});

export const {
  getAllProductFail,
  getAllProductStart,
  getAllProductSucess,
  createProductFail,
  createProductStart,
  createProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
