import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'cameras',
  initialState: { modalOpen: false },
  reducers: {
    openModal() {
      return { modalOpen: true };
    },
    closeModal() {
      return { modalOpen: false };
    },
  },
});

export const { openModal, closeModal } = listSlice.actions;

export default listSlice.reducer;
