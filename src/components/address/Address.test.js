import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import Address from "./Address";

describe("<Address/>", () => {
  let address = "This is a test";
  let component;

  afterEach(cleanup);

  test("renders its children", () => {
    component = render(
      <Address address={address}>
        <p className="test">{address}</p>
      </Address>
    );
    expect(component.container).toHaveTextContent(address);
  });

  test("has correct font-size", () => {
    component = render(
      <Address address={address}>
        <p className="test">{address}</p>
      </Address>
    );
    const el = component.getByText(address);
    expect(el).toHaveStyle({ "font-size": "12px;" });
  });
});
