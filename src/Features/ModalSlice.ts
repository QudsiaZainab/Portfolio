import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalContent = 'web' | 'android' | '';

interface ModalState {
  isOpen: boolean;
  content: ModalContent;
}

const initialState: ModalState = {
  isOpen: false,
  content: '',
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      openModal: (state, action: PayloadAction<ModalContent>) => {
        state.isOpen = true;
        state.content = action.payload;
        console.log('Modal Opened with content:', action.payload);  
      },
      closeModal: (state) => {
        state.isOpen = false;
        state.content = '';
      },
    },
  });
  

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
