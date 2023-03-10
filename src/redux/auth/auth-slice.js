
import { createSlice } from '@reduxjs/toolkit';
// import { fetchAllContacts , fetchAddContact , fetchDeleteContact} from './auth-operations';    
import { signup } from './auth-operations';
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
      });
      // .addCase(fetchAddContact.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchAddContact.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.contacts.push(action.payload);
      // })
      // .addCase(fetchAddContact.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      // .addCase(fetchDeleteContact.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchDeleteContact.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   const index = state.contacts.findIndex(
      //     contact => contact.id === action.payload
      //   );
      //   state.contacts.splice(index, 1);
      // })
      // .addCase(fetchDeleteContact.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // });
  },
});


export default authSlice.reducer;
