import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  current: {
    name: '',
    subnet: '',
    cameras: [],
  },
  details: {
    preset: {},
    camerasList: [],
  },
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
        details: {
          ...state.details,
          camerasList: action.payload,
        },
      };
    },
    setPreset(state, action) {
      return {
        ...state,
        details: {
          ...state.details,
          preset: action.payload,
        },
      };
    },
    removePresetDetails(state, _) {
      return {
        ...state,
        details: {
          ...initialState.details,
        },
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
  setPreset,
  removePresetDetails,
} = presetsSlice.actions;

export default presetsSlice.reducer;
