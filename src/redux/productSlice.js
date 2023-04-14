import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: {
      allProduct: null,
      isFetching: false,
      error: false,
    },
    aProduct: {
      product: null,
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
    getaProductStart: (state) => {
      state.aProduct.isFetching = true;
    },
    getaProductSucess: (state, action) => {
      state.aProduct.isFetching = false;
      state.aProduct.product = action.payload;
    },
    getaProductFail: (state) => {
      state.aProduct.isFetching = false;
      state.aProduct.error = true;
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
    updateProductStart: (state) => {
      state.handleProduct.isFetching = true;
      state.handleProduct.success = false;
    },
    updateProductSuccess: (state) => {
      state.handleProduct.isFetching = false;
      state.handleProduct.success = true;
    },
    updateProductFail: (state) => {
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
  updateProductFail,
  updateProductStart,
  updateProductSuccess,
  getaProductFail,
  getaProductStart,
  getaProductSucess,
} = productSlice.actions;
export default productSlice.reducer;
