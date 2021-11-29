import axios from "axios";
import { setCategoryList } from "../store/reducers/categoryList";
import { setItemList } from "../store/reducers/itemsList";
import { API_ITEMS_URL } from "./settings";

export const fetchAllItems = (items) => (dispatch) => {
  if (items !== undefined) {
    axios
      .get(`${API_ITEMS_URL}`, { params: items })
      .then((response) => {
        dispatch(setCategoryList(response.data.categoryList));
        dispatch(setItemList(response.data.allItemsData));
      })
      .catch((err) => console.log(err));
  }
};
