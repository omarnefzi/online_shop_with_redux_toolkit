import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, rejectWithValue) => {
    try {
      const { data } = await axios.get("http://localhost:3000/blogs");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogs",
  async (id, rejectWithValue) => {
    try {
      const { data } = await axios.get("http://localhost:3000/blogs/" + id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    isLoading: false,
    blogs: [],
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, _) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});



export default blogsSlice.reducer;
