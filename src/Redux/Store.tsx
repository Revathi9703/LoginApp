import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; // Path to your slice

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
