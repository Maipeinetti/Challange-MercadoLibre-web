import { createSlice } from "@reduxjs/toolkit";

export const oneItemSlice = createSlice({
  name: "oneItem",
  initialState: {
    oneItem: {},
  },
  reducers: {
    setOneItem: (state, action) => {
      state.oneItem = action.payload;
    },
  },
});

export const { setOneItem } = oneItemSlice.actions;

export default oneItemSlice.reducer;
