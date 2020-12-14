import { createSlice } from '@reduxjs/toolkit';

const camerasSlice = createSlice({
  name: 'cameras',
  initialState: {
    list: [],
    current: {
      name: '',
      url: '',
      sub_streams: [],
      suffix: '',
      ptz: false,
      udp_supported: false,
      enabled: false,
    },
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
        current: { ...action.payload },
      };
    },
    editCurrent(state, action) {
      return {
        ...state,
        current: {
          ...state.current,
          ...action.payload,
        },
      };
    },
    removeCurrent(state) {
      return {
        ...state,
        current: {
          name: '',
          url: '',
          sub_streams: [],
          suffix: '',
          ptz: false,
          udp_supported: false,
          enabled: false,
        },
      };
    },
  },
});

export const {
  getCameras,
  setCurrent,
  removeCurrent,
  editCurrent,
} = camerasSlice.actions;

export default camerasSlice.reducer;
