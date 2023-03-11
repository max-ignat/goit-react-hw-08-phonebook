
import { createSlice } from '@reduxjs/toolkit';
// import { fetchAllContacts , fetchAddContact , fetchDeleteContact} from './auth-operations';    
import { login, signup , current , logout } from './auth-operations';
const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
        // console.log('payload', action.payload);
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })    
    .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
     .addCase(current.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(current.fulfilled, (state, {payload}) => {
            const {name, email,} = payload;
            state.isLoading = false;
          state.user.name = name;
          state.user.email = email;
            // state.token = token;
            state.isLogin = true;
        })
        .addCase(current.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.token = "";
            state.error = payload;
        })
        .addCase(logout.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.user = {};
            state.token = "";
            state.isLogin = false;
        })
        .addCase(logout.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
  },
});


export default authSlice.reducer;
