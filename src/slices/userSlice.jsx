import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      debugger
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});


export const { loggedInUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;