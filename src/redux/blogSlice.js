import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: {
      allBlog: null,
      isFetching: false,
      error: false,
    },
    anBlog: {
      blog: null,
      isFetching: false,
      error: false,
    },
    handleBlog: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    getAllBlogStart: (state) => {
      state.blogs.isFetching = true;
    },
    getAllBlogSuccess: (state, action) => {
      state.blogs.allBlog = action.payload;
      state.blogs.isFetching = false;
    },
    getAllBlogFail: (state) => {
      state.blogs.isFetching = false;
      state.blogs.error = true;
    },
    handleBlogStart: (state) => {
      state.handleBlog.success = false;
      state.handleBlog.isFetching = true;
    },
    handleBlogSuccess: (state) => {
      state.handleBlog.isFetching = false;
      state.handleBlog.success = true;
    },
    handleBlogFail: (state) => {
      state.handleBlog.isFetching = false;
      state.handleBlog.error = true;
    },
    getAnBlogStart: (state) => {
      state.anBlog.isFetching = true;
    },
    getAnBlogSuccess: (state, action) => {
      state.anBlog.blog = action.payload;
      state.anBlog.isFetching = false;
    },
    getAnBlogFail: (state) => {
      state.anBlog.isFetching = false;
      state.anBlog.error = true;
    },
  },
});

export const {
  getAllBlogFail,
  getAllBlogStart,
  getAllBlogSuccess,
  handleBlogFail,
  handleBlogStart,
  handleBlogSuccess,
  getAnBlogFail,
  getAnBlogStart,
  getAnBlogSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;
