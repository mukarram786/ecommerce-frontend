import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateSearchParam: (state, action) => {
      state.filter.term= {search: action.payload}
    }
  },
});


export const { updateSearchParam } = filterSlice.actions;

export default filterSlice.reducer;