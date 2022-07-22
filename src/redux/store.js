import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './NewsApi/slice';

export default configureStore({
  reducer: {
    news: newsReducer,
  }
});
