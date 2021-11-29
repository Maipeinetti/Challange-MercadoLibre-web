import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllItems } from "../services/getItemsList";
import useNavigateHandler from "./useNavigateHandler";

export default function useInputSubmiter() {
  const [keyword, setKeyword] = useState("");
  const { navigateHandler } = useNavigateHandler();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAllItems(keyword));
    navigateHandler(`/items?search=${keyword}`);
  };

  return {
    keyword,
    searchSubmitHandler,
    handleChange,
  };
}
