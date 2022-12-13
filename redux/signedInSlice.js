import {createSlice} from '@reduxjs/toolkit';

export const signedInSlice = createSlice({
  name: 'signIn',
  initialState: {
    signedIn: false,
  },
  reducers: {
    setSignedIn: (state, action) => {
      console.log('set signed fucntion called', action.payload);
      state.signedIn = action.payload;
    },
  },
});
export const {setSignedIn} = signedInSlice.actions;

export default signedInSlice.reducer;
