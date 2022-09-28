import React from "react";
import { render } from "@testing-library/react";

import ProductCard from "./product-card";

describe("Card", () => {
  test("renders the Card component", () => {
    render(<ProductCard />);
  });
});