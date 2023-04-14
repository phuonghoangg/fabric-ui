import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import typeProductReducer from './typeProductSlice';
import productReducer from './productSlice';
import blogReducer from './blogSlice';
import TypeBlogReducer from './typeBlogSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    typeProduct: typeProductReducer,
    product: productReducer,
    blog: blogReducer,
    typeBlog: TypeBlogReducer,
  },
});
