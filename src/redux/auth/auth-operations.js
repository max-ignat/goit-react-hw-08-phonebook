import * as api from '../../services/auth-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const {data: result} = await api.signUp(data);
      // console.log(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })
// );
// export const fetchAddContact = createAsyncThunk(
//   'contacts/add',
//   async (data, thunkAPI) => {
//     try {
//       const result = await api.addContacts(data);
//       return result;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
//   {
//     condition: ({ name }, { getState }) => {
//       const { contacts } = getState();
//       const normalizedName = name.toLowerCase();
//       const result = contacts.contacts.find(({ name }) => { 
//       return name.toLowerCase() === normalizedName;
//       });
//       if (result) {
//         alert(`${name} is already ixist`);
//         return false;
//       }
//     },
//   }
// );

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/delete',
//   async (id, thunkAPI) => {
//     try {
//       await api.deleteContact(id)
//       return id;
      
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   })