import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const listNews = createAsyncThunk("listNews", async () => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=9&apiKey=aaf6fda5975042d08b87717badabf8df').then((res)=> {
    return res.data;
  })
  // const response = [];
  return response;
});

export const getNewsByCategory = createAsyncThunk(
  "getNewsByCategory",
  async (category) => {
    const response = await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=9&apiKey=aaf6fda5975042d08b87717badabf8df`
      )
      .then((res) => {
        return res.data;
      });
    return response;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    //list news
    builder.addCase(listNews.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(listNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(listNews.rejected, (state, action) => {
      console.log("error", action.payload);
      state.isError = true;
    });
    //news by category
    builder.addCase(getNewsByCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getNewsByCategory.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getNewsByCategory.rejected, (state, action) => {
      console.log("error", action.payload)
      state.isError = true;
    });
  },
});

export default newsSlice.reducer;
