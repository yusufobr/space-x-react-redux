import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const res = await fetch(baseUrl);
    const result = await res.json();
    const RocketArray = result.map((item) => ({
      rocket_id: item.rocket_id,
      rocket_name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images,
      reserved: false,
    }));
    return RocketArray;
  },
);

export const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    addReserve: (state, action) => {
      const idToFind = action.payload;
      console.log('rockets id ', idToFind);
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.rocket_id === idToFind) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = [...action.payload];
    });
  },
});

export const { addReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
