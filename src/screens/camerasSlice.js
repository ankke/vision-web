import { createSlice } from '@reduxjs/toolkit';

const camerasSlice = createSlice({
  name: 'cameras',
  initialState: {
    list: [],
    current: {},
  },
  reducers: {
    getCameras(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    setCurrent(state, action) {
      return {
        ...state,
        current: { ...action.payload.camera },
      };
    },
  },
});

export const { getCameras, setCurrent } = camerasSlice.actions;

export default camerasSlice.reducer;
