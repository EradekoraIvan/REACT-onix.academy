import { createSlice } from '@reduxjs/toolkit';  

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
  },
  reducers: {
    loadNews(state, action) {
      state.news = action.payload;
    },
  }
});
export const { loadNews, } = newsSlice.actions;
export default newsSlice.reducer;
