import { configureStore } from "@reduxjs/toolkit";
import items from "./reducers/itemsList";
import oneItem from "./reducers/oneItem";
import categories from "./reducers/categoryList";

const store = configureStore({
  reducer: {
    items,
    categories,
    oneItem,
  },
});

export default store;
