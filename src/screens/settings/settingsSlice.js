import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: { path: './photos', udp_preferred: true },
  reducers: {
    setSettings(state, action) {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
