import React from "react";

export default function SoldQuantity(props) {
  const detail = props.productData;
  return detail ? (
    <div className="stock__condition__div">
      <p className="stock__condition">
        {detail.condition} - {detail.sold_quantity} vendidos
      </p>
    </div>
  ) : (
    ""
  );
}
