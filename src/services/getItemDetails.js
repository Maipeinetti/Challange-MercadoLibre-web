import axios from "axios";
import { setOneItem } from "../store/reducers/oneItem";
import { API_ITEMS_URL } from "./settings";

export const fetchOneItem = (id) => (dispatch) => {
  axios
    .get(`${API_ITEMS_URL}/${id}`, { params: id })
    .then((response) => {
      dispatch(setOneItem(response.data));
    })
    .catch((err) => console.log(err));
};
