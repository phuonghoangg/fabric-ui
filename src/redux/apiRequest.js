import axios from 'axios';
import { loginFail, loginStart, loginSuccess, logoutFail, logoutStart, logoutSuccess } from './userSlice';
import {
  createTypeFail,
  createTypeStart,
  createTypeSuccess,
  deleteTypeFail,
  deleteTypeStart,
  deleteTypeSuccess,
  getAllTypeFail,
  getAllTypeStart,
  getAllTypeSuccess,
} from './typeProductSlice';
import {
  createProductFail,
  createProductStart,
  createProductSuccess,
  getAllProductFail,
  getAllProductStart,
  getAllProductSucess,
  getaProductFail,
  getaProductStart,
  getaProductSucess,
  updateProductFail,
  updateProductStart,
  updateProductSuccess,
} from './productSlice';
import {
  getAllTypeBlogFail,
  getAllTypeBlogStart,
  getAllTypeBlogSuccess,
  handleTypeBlogFail,
  handleTypeBlogStart,
  handleTypeBlogSuccess,
} from './typeBlogSlice';
import {
  getAllBlogFail,
  getAllBlogStart,
  getAllBlogSuccess,
  getAnBlogFail,
  getAnBlogStart,
  getAnBlogSuccess,
  handleBlogFail,
  handleBlogStart,
  handleBlogSuccess,
} from './blogSlice';

const host = `http://localhost:8000`;
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${host}/v1/user/login`, user);
    dispatch(loginSuccess(res.data));
    navigate('/admin');
  } catch (error) {
    dispatch(loginFail());
  }
};

export const logoutUser = async (user, dispatch, navigate, accessToken) => {
  dispatch(logoutStart());
  try {
    await axios.post(`${host}/v1/user/logout`, user, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logoutSuccess());
    navigate('/');
  } catch (error) {
    dispatch(logoutFail());
  }
};

export const getAllType = async (dispatch) => {
  dispatch(getAllTypeStart());
  try {
    const res = await axios.get(`${host}/v2/type-product`);
    dispatch(getAllTypeSuccess(res.data));
  } catch (error) {
    dispatch(getAllTypeFail());
  }
};

export const createType = async (type, dispatch) => {
  dispatch(createTypeStart());
  try {
    await axios.post(`${host}/v2/type-product/add-type`, type);
    dispatch(createTypeSuccess());
  } catch (error) {
    dispatch(createTypeFail());
  }
};

export const deleteType = async (id, dispatch) => {
  dispatch(deleteTypeStart());
  try {
    await axios.delete(`${host}/v2/type-product/${id}`);
    dispatch(deleteTypeSuccess());
  } catch (error) {
    dispatch(deleteTypeFail());
  }
};

export const getAllProduct = async (dispatch) => {
  dispatch(getAllProductStart());
  try {
    const res = await axios.get(`${host}/v3/product`);
    dispatch(getAllProductSucess(res.data));
  } catch (error) {
    dispatch(getAllProductFail());
  }
};

export const getAllProductPagi = async (payload, dispatch) => {
  dispatch(getAllProductStart());
  try {
    const res = await axios.post(`${host}/v3/product/all-product`, payload);
    dispatch(getAllProductSucess(res.data));
  } catch (error) {
    dispatch(getAllProductFail());
  }
};

export const getOneProduct = async (id, dispatch) => {
  dispatch(getaProductStart());
  try {
    const res = await axios.get(`${host}/v3/product/${id}`);
    dispatch(getaProductSucess(res.data));
  } catch (error) {
    dispatch(getaProductFail());
  }
};

export const createProduct = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    await axios.post(`${host}/v3/product/add-product`, product);
    dispatch(createProductSuccess());
  } catch (error) {
    dispatch(createProductFail());
  }
};

export const updateProduct = async (product, id, dispatch) => {
  dispatch(updateProductStart());
  try {
    await axios.put(`${host}/v3/product/${id}`, product);
    dispatch(updateProductSuccess());
  } catch (error) {
    dispatch(updateProductFail());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(updateProductStart());
  try {
    await axios.delete(`${host}/v3/product/${id}`);
    dispatch(updateProductSuccess());
  } catch (error) {
    dispatch(updateProductFail());
  }
};

export const createTypeBlog = async (typeBlog, dispatch) => {
  dispatch(handleTypeBlogStart());
  try {
    await axios.post(`${host}/v4/type-blog/`, typeBlog);
    dispatch(handleTypeBlogSuccess());
  } catch (error) {
    dispatch(handleTypeBlogFail());
  }
};

export const updateTypeBlog = async (id, typeBlog, dispatch) => {
  dispatch(handleTypeBlogStart());
  try {
    await axios.put(`${host}/v4/type-blog/${id}`, typeBlog);
    dispatch(handleTypeBlogSuccess());
  } catch (error) {
    dispatch(handleTypeBlogFail());
  }
};

export const getAllTypeBlog = async (dispatch) => {
  dispatch(getAllTypeBlogStart());
  try {
    const res = await axios.get(`${host}/v4/type-blog/`);
    dispatch(getAllTypeBlogSuccess(res.data));
  } catch (error) {
    dispatch(getAllTypeBlogFail());
  }
};

export const deleteTypeBlog = async (id, dispatch) => {
  dispatch(handleTypeBlogStart());
  try {
    await axios.delete(`${host}/v4/type-blog/${id}`);
    dispatch(handleTypeBlogSuccess());
  } catch (error) {
    dispatch(handleTypeBlogFail());
  }
};

export const createBlog = async (blog, dispatch) => {
  dispatch(handleBlogStart());
  try {
    await axios.post(`${host}/v5/blog/`, blog);
    dispatch(handleBlogSuccess());
  } catch (error) {
    dispatch(handleBlogFail());
  }
};

export const getAllBlog = async (payload, dispatch) => {
  dispatch(getAllBlogStart());
  try {
    const res = await axios.post(`${host}/v5/blog/all-blog`, payload);
    dispatch(getAllBlogSuccess(res.data));
  } catch (error) {
    dispatch(getAllBlogFail());
  }
};

export const getABlog = async (id, dispatch) => {
  dispatch(getAnBlogStart());
  try {
    const res = await axios.get(`${host}/v5/blog/${id}`);
    dispatch(getAnBlogSuccess(res.data));
  } catch (error) {
    dispatch(getAnBlogFail());
  }
};

export const deleteBlog = async (id, dispatch) => {
  dispatch(handleBlogStart());
  try {
    await axios.delete(`${host}/v5/blog/${id}`);
    dispatch(handleBlogSuccess());
  } catch (error) {
    dispatch(handleBlogFail());
  }
};

export const editBlog = async (id, blog, dispatch) => {
  dispatch(handleBlogStart());
  try {
    await axios.put(`${host}/v5/blog/${id}`, blog);
    dispatch(handleBlogSuccess());
  } catch (error) {
    dispatch(handleBlogFail());
  }
};
