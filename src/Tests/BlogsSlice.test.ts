import { configureStore } from '@reduxjs/toolkit';
import blogsReducer, { setFilter } from '../Features/BlogsSlice';
import { blogsData } from '../Data/BlogsData';

const initialState = {
  blogs: blogsData,
  filter: 'all' as 'all' | 'web' | 'android',
};

interface RootState {
  blogs: typeof initialState; 
}

describe('blogsSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: { blogs: blogsReducer },
      preloadedState: { blogs: initialState },
    });
  });

  it('should return the initial state when an unknown action is dispatched', () => {
    const state = store.getState() as RootState; 
    expect(state.blogs).toEqual(initialState);
  });

  it('should handle setFilter action and update filter to "web"', () => {
    store.dispatch(setFilter('web'));
    const state = store.getState() as RootState;  // Explicitly cast to RootState
    expect(state.blogs.filter).toBe('web');
  });

  it('should handle setFilter action and update filter to "android"', () => {
    store.dispatch(setFilter('android'));
    const state = store.getState() as RootState;  // Explicitly cast to RootState
    expect(state.blogs.filter).toBe('android');
  });

  it('should handle setFilter action and reset filter to "all"', () => {
    store.dispatch(setFilter('all'));
    const state = store.getState() as RootState;  // Explicitly cast to RootState
    expect(state.blogs.filter).toBe('all');
  });
});
