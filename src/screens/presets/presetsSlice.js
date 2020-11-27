import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  current: {
    name: '',
    subnet: '',
    cameras: [],
  },
  camerasList: [],
};

const presetsSlice = createSlice({
  name: 'cameras',
  initialState: {
    ...initialState,
  },
  reducers: {
    getPresets(state, action) {
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
          ...initialState.current,
        },
      };
    },
    getCamerasForPreset(state, action) {
      return {
        ...state,
        camerasList: action.payload,
      };
    },
  },
});

export const {
  getPresets,
  setCurrent,
  removeCurrent,
  editCurrent,
  getCamerasForPreset,
} = presetsSlice.actions;

export default presetsSlice.reducer;
