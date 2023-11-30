import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header/index";

jest.mock(
  "../../assets/illustration-working.svg",
  () => "mocked-working-image"
);

describe("Header component", () => {
  it("renders with correct content", () => {
    render(<Header />);

    expect(
      screen.getByText("More than just shorter links")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Build your brand's recognition and get detailed insights on how your links are performing."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders with correct image", () => {
    render(<Header />);

    expect(screen.getByAltText("Working Illustration")).toBeInTheDocument();
  });
});
