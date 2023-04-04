import axios from 'axios';
import { loginFail, loginStart, loginSuccess } from './userSlice';
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
} from './productSlice';

const host = `http://localhost:8000`;
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    // const res = axios.post('')
    // dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFail());
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

export const createProduct = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    await axios.post(`${host}/v3/product/add-product`, product);
    dispatch(createProductSuccess());
  } catch (error) {
    dispatch(createProductFail());
  }
};
