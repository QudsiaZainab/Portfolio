import projectsReducer, { setFilter } from '../Features/ProjectsSlice';
import { projectsData } from '../Data/ProjectsData';

const initialState = {
  projects: projectsData,
  filter: 'all' as 'all' | 'web' | 'android',
};

describe('projectsSlice', () => {
  it('should return the initial state when an unknown action is dispatched', () => {
    const state = projectsReducer(undefined, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should handle setFilter action and update filter to "web"', () => {
    const action = setFilter('web');
    const stateAfter = projectsReducer(initialState, action);

    expect(stateAfter.filter).toBe('web');
  });

  it('should handle setFilter action and update filter to "android"', () => {
    const action = setFilter('android');
    const stateAfter = projectsReducer(initialState, action);

    expect(stateAfter.filter).toBe('android');
  });

  it('should handle setFilter action and reset filter to "all"', () => {
    const action = setFilter('all');
    const stateAfter = projectsReducer(initialState, action);

    expect(stateAfter.filter).toBe('all');
  });
});
