import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../Types/ProjectType';
import { projectsData } from '../Data/ProjectsData';
interface ProjectsState {
  projects: Project[];
  filter: 'all' | 'web' | 'android';
}

const initialState: ProjectsState = {
  projects: projectsData, 
  filter: 'all', 
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<'all' | 'web' | 'android'>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = projectsSlice.actions;
export default projectsSlice.reducer;
