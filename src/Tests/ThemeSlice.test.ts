import themeReducer, { toggleTheme } from '../Features/ThemeSlice';

describe('themeSlice', () => {
  beforeEach(() => {
    // Reset the localStorage before each test to ensure clean state
    const mockLocalStorage: Storage = {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      clear: () => {
        store = {};
      },
      length: 0,
      key: (index: number) => {
        return Object.keys(store)[index] || null;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
    };
    let store: { [key: string]: string } = {};
    global.localStorage = mockLocalStorage;

    // Reset localStorage to known state for each test
    localStorage.setItem('isDarkMode', 'false'); // Default state
  });

  it('should return the initial state with default value from localStorage', () => {
    // Ensure that initial state is false (as per localStorage default)
    const state = themeReducer(undefined, { type: '' });
    expect(state.isDarkMode).toBe(false);
  });

  it('should toggle isDarkMode to true', () => {
    const initialState = { isDarkMode: false };
    const action = toggleTheme();
    const stateAfter = themeReducer(initialState, action);

    expect(stateAfter.isDarkMode).toBe(true);
    expect(localStorage.getItem('isDarkMode')).toBe('true');
  });

  it('should toggle isDarkMode to false', () => {
    const initialState = { isDarkMode: true };
    const action = toggleTheme();
    const stateAfter = themeReducer(initialState, action);

    expect(stateAfter.isDarkMode).toBe(false);
    expect(localStorage.getItem('isDarkMode')).toBe('false');
  });

  it('should save updated theme to localStorage', () => {
    const initialState = { isDarkMode: false };
    const action = toggleTheme();
    themeReducer(initialState, action);

    expect(localStorage.getItem('isDarkMode')).toBe('true');
  });
});
