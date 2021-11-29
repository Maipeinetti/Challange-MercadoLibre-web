import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categoriesList: [],
  },
  reducers: {
    setCategoryList: (state, action) => {
      state.categoriesList = action.payload;
    },
  },
});
export const { setCategoryList } = categorySlice.actions;

export default categorySlice.reducer;
