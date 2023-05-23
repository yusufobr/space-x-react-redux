import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const fetchRockets = createAsyncThunk('rockets/fetch', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: (builder) => {
    // builder.addCase(fetchRockets.pending, (state) => {
    //   state.isLoading = true;
    // });

    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      //   state.isLoading = false;
      state.rockets = [...action.payload];
    });

    // builder.addCase(fetchRockets.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export default rocketsSlice.reducer;
