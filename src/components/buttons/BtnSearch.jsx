import React from "react";
import searchIcon from "../../assets/images/ic_Search_x2.png";

export default function BtnSearch() {
  return (
    <div className="search__icon">
      <button type="submit">
        <img src={searchIcon} alt="Lupa de búsqueda"></img>
      </button>
    </div>
  );
}
