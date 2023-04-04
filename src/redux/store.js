import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import typeProductReducer from './typeProductSlice';
import productReducer from './productSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    typeProduct: typeProductReducer,
    product: productReducer,
  },
});
