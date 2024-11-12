import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode') || 'false'), // Read from localStorage
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode)); // Save to localStorage
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
