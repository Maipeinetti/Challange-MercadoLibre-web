import React from "react";

export default function ProductTitle({ title }) {
  return title ? <p className="title__p">{title.title}</p> : "";
}
