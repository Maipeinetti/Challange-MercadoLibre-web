import React from "react";
import priceDots from "../../utils/priceDots";

export default function Prices(props) {
  const { numberWithCommas } = priceDots();
  const detail = props.product;

  return detail ? (
    <div className="price__div">
      <p className="price">
        $ {numberWithCommas(detail.price.amount)},{detail.price.decimals}
      </p>
    </div>
  ) : (
    ""
  );
}
