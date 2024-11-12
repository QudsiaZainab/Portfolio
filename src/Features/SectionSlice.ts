
import { createSlice } from '@reduxjs/toolkit';

const sectionSlice = createSlice({
    name: 'section',
    initialState: {
        activeSection: ''
    },
    reducers: {
        setActiveSection: (state, action) => {
            state.activeSection = action.payload;
        }
    }
});

export const { setActiveSection } = sectionSlice.actions;
export default sectionSlice.reducer;
