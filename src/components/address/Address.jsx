import React from "react";

export default function Address(props) {
  const seller_address = props.address;
  return <p className="productList__address">{seller_address}</p>;
}
