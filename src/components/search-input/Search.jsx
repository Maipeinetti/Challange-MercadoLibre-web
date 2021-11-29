import React from "react";
import useInputSubmiter from "../../hooks/useInputSubmiter";
import BtnSearch from "../buttons/BtnSearch";

export default function Search() {
  const { searchSubmitHandler, handleChange, keyword } = useInputSubmiter();

  return (
    <div className="search__div">
      <form
        onSubmit={(e) => searchSubmitHandler(e)}
        className="search__form"
        id="searchForm"
      >
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          className="search__input"
          id="searchForm"
          name="searchForm"
          value={keyword}
          onChange={handleChange}
        ></input>

        <BtnSearch></BtnSearch>
      </form>
    </div>
  );
}
