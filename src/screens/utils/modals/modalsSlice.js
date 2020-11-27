import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: { open: [] },
  reducers: {
    openModal(state, action) {
      state.open.push(action.payload);
    },
    closeModal(state, action) {
      const index = state.open.indexOf(action.payload);
      return {
        ...state,
        open: [...state.open.slice(0, index), ...state.open.slice(index + 1)],
      };
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
