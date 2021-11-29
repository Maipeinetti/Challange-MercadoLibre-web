import React from "react";

export default function ThumbnailMini(props) {
  const picture = props.product.picture;
  return (
    <div className="productList__image">
      <img src={picture} alt="selling product"></img>
    </div>
  );
}
