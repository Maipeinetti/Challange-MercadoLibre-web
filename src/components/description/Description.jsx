import React from "react";

export default function Description(props) {
  const detail = props.product.items;

  return detail ? (
    <div className="description__div">
      <p className="description__text">{detail.description}</p>
    </div>
  ) : (
    ""
  );
}
