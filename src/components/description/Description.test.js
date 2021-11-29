import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import Description from "./Description";

describe("<Description/>", () => {
  let productData = {
    items: { description: "This is a description test" },
  };
  let component;

  afterEach(cleanup);

  test("renders its children", () => {
    component = render(<Description product={productData} />);
    expect(component.container).toHaveTextContent(
      productData.items.description
    );
  });

  test("has correct font-size", () => {
    component = render(<Description product={productData} />);
    const el = component.getByText(productData.items.description);
    expect(el).toHaveStyle({ "font-size": "var(16px)" });
  });
});
