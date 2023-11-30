import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom for additional matchers
import Banner from "../Banner/index";

jest.mock("../../assets/bg-boost-desktop.svg", () => "mocked-background-image");

describe("Banner component", () => {
  it("renders with correct content", () => {
    render(<Banner />);

    expect(screen.getByText(/Boost your links today/i)).toBeInTheDocument();
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
  });

  it("renders with correct background image", () => {
    render(<Banner />);

    const containerBanner = screen.getByTestId("container-banner");
    expect(containerBanner).toHaveStyle({
      backgroundImage: "url(mocked-background-image)",
    });
  });
});
