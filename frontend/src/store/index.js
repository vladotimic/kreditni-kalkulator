import { configureStore } from '@reduxjs/toolkit';
import loanReducer from './features/loanSlice';

const store = configureStore({
  reducer: {
    loan: loanReducer,
  },
});

export default store;
