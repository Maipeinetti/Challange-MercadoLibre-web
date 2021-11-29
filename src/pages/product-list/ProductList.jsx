import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
//loading sppiner
import ClipLoader from "react-spinners/ClipLoader";
//hooks
import { fetchAllItems } from "../../services/getItemsList";
//components
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import Prices from "../../components/prices/Prices";
import ThumbnailMini from "../../components/thumbnail/ThumbnailMini";
import Address from "../../components/address/Address";
import ShippingIcon from "../../components/shipping-icon/ShippingIcon";
import ProductTitle from "../../components/product-title/ProductTitle";
import SearchHeader from "../../components/search-header/SearchHeader";

export default function ProductList() {
  const [loading, setLoading] = useState(false);

  const { search } = useLocation();
  let keywordSearch = search.split("=").pop();
  //redux
  const dispatch = useDispatch();
  const { list: products } = useSelector((state) => state.items);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchAllItems(keywordSearch));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch, keywordSearch]);

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
              {products.items
                ? `Mercado Libre | ${products.items.length} Resultados de búsqueda`
                : "Mercado Libre"}
            </title>
            <meta
              name="description"
              content={
                products.items
                  ? `Mercado Libre | ${products.items.length} Resultados de búsqueda`
                  : "Mercado Libre productos"
              }
            />
            <meta
              name="keywords"
              content={
                products.items
                  ? `${keywordSearch}, ${products.items.length}`
                  : "resultados de búsqueda"
              }
            />
          </Helmet>
          <BreadCrumb allCategories={categories} />

          {products.items
            ? products.items.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={`/items/${item.id}`}
                    className="productList__link"
                  >
                    <div className="producList__div">
                      <div className="productList__image-price-icon-title">
                        <ThumbnailMini product={item} />
                        <div className="productList__price-icon-title">
                          <div className="productList__price-icon">
                            <div className="productList__price">
                              <Prices product={item} />
                            </div>

                            <div className="shipping__icon">
                              {item.free_shipping ? (
                                <ShippingIcon
                                  freeShippingtruck={item.free_shipping}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div className="productList__title">
                            <ProductTitle title={item} />
                          </div>
                        </div>
                      </div>

                      <div className="productList__addressDiv">
                        <Address address={item.seller_address} />
                      </div>
                    </div>
                  </Link>
                );
              })
            : ""}
        </>
      )}
    </>
  );
}
