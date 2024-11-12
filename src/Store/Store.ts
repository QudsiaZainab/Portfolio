
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Features/ProjectsSlice';
import blogReducer from '../Features/BlogsSlice';
import sectionReducer from '../Features/SectionSlice';
import themeReducer from '../Features/ThemeSlice';
import modalReducer from '../Features/ModalSlice';


export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        projects: projectReducer,
        blogs: blogReducer,
        section: sectionReducer,
        theme: themeReducer,
        modal: modalReducer,
    },
});

export default store;

