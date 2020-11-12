import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [{ name: 'name', subnet: 'sub', cameras: ['1', '2'] }],
  current: {
    name: 'name',
    subnet: 'sub',
    cameras: ['1', '2'],
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
  },
});

export const {
  getPresets,
  setCurrent,
  removeCurrent,
  editCurrent,
} = presetsSlice.actions;

export default presetsSlice.reducer;
