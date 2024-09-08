import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api'; // Path to your Axios instance

// Define the initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Create an async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await api.get('/your-endpoint');
  return response.data;
});

// Create a slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk
export { fetchData };

// Export the reducer
export default dataSlice.reducer;
