import React from "react";
import logo from "../../assets/images/Logo_ML2.png";
import useNavigateHandler from "../../hooks/useNavigateHandler";

export default function Logo() {
  const { navigateHandler } = useNavigateHandler();

  return (
    <div className="logo__navbar">
      <button onClick={() => navigateHandler("/")} className="logo__button">
        <img src={logo} alt="Logo de empresa"></img>
      </button>
    </div>
  );
}
