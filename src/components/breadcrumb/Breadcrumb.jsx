import React from "react";

export default function Breadcumb(props) {
  const data = props.allCategories.categoriesList;

  const items =
    data.length && data[0].values
      ? data[0].values[0].path_from_root.map((category) => category.name)
      : [];

  return (
    <div className="breadcrumb__div">
      <>
        {items.map((item, i) => {
          return <p key={i}> {item} </p>;
        })}
      </>
    </div>
  );
}
