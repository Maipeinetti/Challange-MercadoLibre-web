import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SoldQuantity from "./SoldQuantity";

describe("<SoldQuantity/>", () => {
  let soldQuantitydata = {
    condition: "This is a condition test",
    sold_quantity: "This is a quantity test",
  };

  let component;

  test("renders its children", () => {
    component = render(<SoldQuantity productData={soldQuantitydata} />);

    expect(component.container).toHaveTextContent(
      `${soldQuantitydata.condition} - ${soldQuantitydata.sold_quantity} vendidos`
    );
  });

  test("has correct font-size", () => {
    component = render(<SoldQuantity productData={soldQuantitydata} />);

    const el = component.getByText(
      `${soldQuantitydata.condition} - ${soldQuantitydata.sold_quantity} vendidos`
    );

    expect(el).toHaveStyle({ "font-size": "var(14px;)" });
  });
});
