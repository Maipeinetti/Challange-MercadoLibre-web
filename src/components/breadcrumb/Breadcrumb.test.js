import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

describe("<Breadcrumb/>", () => {
  let categoriesList = {
    categoriesList: [
      { values: [{ path_from_root: [{ name: "test breadcrumb" }] }] },
    ],
  };
  let component;

  test("renders its children", () => {
    component = render(<Breadcrumb allCategories={categoriesList} />);

    expect(component.container).toHaveTextContent("test breadcrumb");
  });

  test("has correct font-size", () => {
    component = render(<Breadcrumb allCategories={categoriesList} />);
    const el = component.getByText("test breadcrumb");
    expect(el).toHaveStyle({ "font-size": "var(14px;)" });
  });
});
