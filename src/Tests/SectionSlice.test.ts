import sectionReducer, { setActiveSection } from '../Features/SectionSlice';

const initialState = {
  activeSection: '',
};

describe('sectionSlice', () => {
  it('should return the initial state when an unknown action is dispatched', () => {
    const state = sectionReducer(undefined, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should handle setActiveSection action and update activeSection', () => {
    const action = setActiveSection('home');
    const stateAfter = sectionReducer(initialState, action);

    expect(stateAfter.activeSection).toBe('home');
  });

  it('should handle setActiveSection action and update activeSection to a different value', () => {
    const action = setActiveSection('about');
    const stateAfter = sectionReducer(initialState, action);

    expect(stateAfter.activeSection).toBe('about');
  });

  it('should overwrite the activeSection when a new section is set', () => {
    const action = setActiveSection('services');
    const stateAfter = sectionReducer({ activeSection: 'home' }, action);

    expect(stateAfter.activeSection).toBe('services');
  });
});
