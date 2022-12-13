import {configureStore} from '@reduxjs/toolkit';
import signedInReducer from './signedInSlice';

const store = configureStore({
  reducer: {
    signIn: signedInReducer,
  },
});
export default store;
