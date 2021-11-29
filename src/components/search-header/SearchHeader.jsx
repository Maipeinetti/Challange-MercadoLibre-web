import React from "react";
import Logo from "../logo/Logo";
import Search from "../search-input/Search";

export default function SearchHeader(props) {
  return (
    <div>
      <nav className="header__basic">
        <Logo></Logo>
        <Search></Search>
      </nav>
    </div>
  );
}
