import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Blog } from '../Types/BlogType';
import { blogsData } from '../Data/BlogsData';
interface BlogsState {
  blogs: Blog[];
  filter: 'all' | 'web' | 'android';
}

const initialState: BlogsState = {
  blogs: blogsData, 
  filter: 'all', 
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<'all' | 'web' | 'android'>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = blogsSlice.actions;
export default blogsSlice.reducer;