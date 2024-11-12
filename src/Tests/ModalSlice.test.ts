import modalReducer, { openModal, closeModal } from '../Features/ModalSlice';

const initialState = {
  isOpen: false,
  content: '' as 'web' | 'android' | '',  
};

describe('modalSlice', () => {
  it('should return the initial state when an unknown action is dispatched', () => {
    const state = modalReducer(undefined, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should open the modal and set content when openModal is called', () => {
    const content: 'web' | 'android' = 'web';  // Explicitly set 'web' or 'android'
    const action = openModal(content);
    const stateAfter = modalReducer(initialState, action);

    expect(stateAfter.isOpen).toBe(true);
    expect(stateAfter.content).toBe(content);
  });

  it('should close the modal and reset content when closeModal is called', () => {
    const stateWithModalOpen = {
      isOpen: true,
      content: 'web' as 'web' | 'android' | '', 
    };
    const action = closeModal();
    const stateAfter = modalReducer(stateWithModalOpen, action);

    expect(stateAfter.isOpen).toBe(false);
    expect(stateAfter.content).toBe('');
  });
});
