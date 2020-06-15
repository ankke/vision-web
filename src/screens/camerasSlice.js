import { createSlice } from '@reduxjs/toolkit';

const camerasSlice = createSlice({
  name: 'cameras',
  initialState: [],
  reducers: {
    getCameras(state, action) {
      return action.payload;
    },
  },
});

export const { getCameras } = camerasSlice.actions;

export default camerasSlice.reducer;
