import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const res = await fetch(URL);
  const result = await res.json();
  return result;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        console.log('hellodk dsldksl ');
        state.missions = [...action.payload];
      });
  },
});

export default missionsSlice.reducer;
