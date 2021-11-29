import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: {
    list: {},
  },
  reducers: {
    setItemList: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { setItemList } = itemSlice.actions;

export default itemSlice.reducer;
