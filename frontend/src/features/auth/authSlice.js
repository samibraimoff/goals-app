import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// get user from localstorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // regular non async reducers
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: () => {}, // async reducers
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
