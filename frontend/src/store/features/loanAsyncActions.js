import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllLoans = createAsyncThunk('loan/getAllLoans', async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/api/v1/loans');

    return data;
  } catch (error) {
    console.log(error);
  }
});
export const saveLoan = createAsyncThunk('loan/saveLoan', async (payload) => {
  try {
    const options = {
      headers: { 'Content-Type': 'application/json' },
    };
    const { data } = await axios.post(
      'http://localhost:5000/api/v1/loans',
      payload,
      options
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const deleteLoan = createAsyncThunk('loan/deleteLoan', async (id) => {
  try {
    const options = {
      headers: { 'Content-Type': 'application/json' },
    };
    await axios.delete(`http://localhost:5000/api/v1/loans/${id}`, options);

    return id;
  } catch (error) {
    console.log(error);
  }
});
export const updateLoan = createAsyncThunk(
  'loan/updateLoan',
  async (payload) => {
    try {
      const options = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.patch(
        `http://localhost:5000/api/v1/loans/${payload.id}`,
        payload,
        options
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
