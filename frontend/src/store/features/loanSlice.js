import { createSlice } from '@reduxjs/toolkit';
import {
  getAllLoans,
  saveLoan,
  updateLoan,
  deleteLoan,
} from './loanAsyncActions';

const loanSlice = createSlice({
  name: 'loan',
  initialState: {
    loans: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getAllLoans.pending]: (state) => {
      state.loading = true;
    },
    [getAllLoans.fulfilled]: (state, action) => {
      state.loading = false;
      state.loans = action.payload;
    },
    [getAllLoans.rejected]: (state, action) => {
      state.loading = false;
    },
    [saveLoan.pending]: (state) => {
      state.loading = true;
    },
    [saveLoan.fulfilled]: (state, action) => {
      state.loading = false;
      state.loans = [...state.loans, action.payload];
    },
    [saveLoan.rejected]: (state, action) => {
      state.loading = false;
    },
    [updateLoan.pending]: (state) => {
      state.loading = true;
    },
    [updateLoan.fulfilled]: (state, action) => {
      state.loading = false;
      const { _id, amount, rate, term, payments } = action.payload;
      const updatedLoan = state.loans.find((loan) => loan._id === _id);
      if (updatedLoan) {
        updatedLoan.amount = amount;
        updatedLoan.rate = rate;
        updatedLoan.term = term;
        updatedLoan.payments = payments;
      }
    },
    [updateLoan.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteLoan.pending]: (state) => {
      state.loading = true;
    },
    [deleteLoan.fulfilled]: (state, action) => {
      state.loading = false;
      state.loans = state.loans.filter((item) => item._id !== action.payload);
    },
    [deleteLoan.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { calculate, updateList, reset } = loanSlice.actions;

export default loanSlice.reducer;
