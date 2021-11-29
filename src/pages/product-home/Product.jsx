import React from "react";
import { Helmet } from "react-helmet";
import SearchHeader from "../../components/search-header/SearchHeader";

export default function Product() {
  return (
    <>
      <SearchHeader />
      <div className="product__p">
        <Helmet>
          <title>Mercado Libre </title>
          <meta name="description" content="Explorar productos" />
          <meta name="keywords" content="Exlorar, Comprar" />
        </Helmet>
      </div>
    </>
  );
}
