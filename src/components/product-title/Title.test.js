import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductTitle from "./ProductTitle";

describe("<ProductTitle/>", () => {
  let title = { title: "title test" };
  let component;

  test("renders its children", () => {
    component = render(<ProductTitle title={title} />);

    expect(component.container).toHaveTextContent(title.title);
  });
  test("has correct font-size", () => {
    component = render(<ProductTitle title={title} />);
    const el = component.getByText(title.title);
    expect(el).toHaveStyle({ "font-size": "var(18px;)" });
  });
});
