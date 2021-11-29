import React from "react";
import { Link } from "react-router-dom";
import SearchHeader from "../../components/search-header/SearchHeader";

export default function NotFound404() {
  return (
    <>
      <SearchHeader />
      <main className="not__found">
        <h1>Parece que esta página no existe</h1>
        <Link to="./" className="link">
          <p>Ir a la página principal</p>
        </Link>
      </main>
    </>
  );
}
