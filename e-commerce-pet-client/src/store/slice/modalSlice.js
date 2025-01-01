import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataModal: null,
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.dataModal = action.payload
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.dataModal = null
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;