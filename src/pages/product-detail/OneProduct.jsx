import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
//loading sppiner
import ClipLoader from "react-spinners/ClipLoader";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchOneItem } from "../../services/getItemDetails";
//hooks
import useInputSubmiter from "../../hooks/useInputSubmiter";
//components
import Prices from "../../components/prices/Prices";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import Description from "../../components/description/Description";
import Breadcumb from "../../components/breadcrumb/Breadcrumb";
import BlueBtn from "../../components/buttons/BlueBtn";
import SoldQuantity from "../../components/sold-quantity/SoldQuantity";
import ProductTitle from "../../components/product-title/ProductTitle";
import SearchHeader from "../../components/search-header/SearchHeader";

export default function OneProduct() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { keyword } = useInputSubmiter();
  //redux
  const { oneItem: product } = useSelector((state) => state.oneItem);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneItem(id));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch, id]);

  return (
    <>
      <SearchHeader />
      {loading ? (
        <div className="spinner">
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
          <ClipLoader loading={loading} size={70} />
        </div>
      ) : (
        <>
          <Helmet>
            <title>
              {product.items
                ? `Mercado Libre | ${product.items.title}`
                : "Mercado Libre"}
            </title>
            <meta
              name="description"
              content={
                product.items
                  ? `Mercado Libre | ${product.items.title}`
                  : "Mercado Libre productos"
              }
            />
            <meta
              name="keywords"
              content={
                product.items
                  ? `${keyword}, ${product.items.title}`
                  : "resultados de búsqueda"
              }
            />
          </Helmet>

          <Breadcumb allCategories={categories} />
          <div className="tdp">
            <div className="thumbnail__description">
              <Thumbnail product={product.items}></Thumbnail>
              <h3 className="description__title">Descripción del producto</h3>
              <Description product={product}></Description>
            </div>
            <div className="detail__price">
              <SoldQuantity productData={product.items} />
              <div className="price_title__div">
                <ProductTitle title={product.items} />
                <Prices product={product.items}></Prices>
                <BlueBtn></BlueBtn>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
