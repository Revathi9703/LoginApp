import api from '../ApiService/index';
import { API_END_POINTS } from '../ApiService/endpoints';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {



  },
  extraReducers: () => {
  },
});


export const {} = dataSlice.reducer

export default dataSlice;
