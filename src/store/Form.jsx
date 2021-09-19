import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'todo',
  initialState: {
    data: {
      fullName: '',
      email: '',
      phone: '',
      nationality: '',
      message: '',
    },
  },
  reducers: {
    addData: (state, action) => {
      state.data[action.payload.name] = action.payload.value;
    },
  },
});

export const { addData } = formSlice.actions;
export default formSlice.reducer;
