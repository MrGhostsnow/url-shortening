import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer/index";

jest.mock("../../assets/logo.svg", () => "mocked-logo");
jest.mock("../../assets/icon-facebook.svg", () => "mocked-fb-icon");
jest.mock("../../assets/icon-instagram.svg", () => "mocked-ig-icon");
jest.mock("../../assets/icon-pinterest.svg", () => "mocked-pr-icon");
jest.mock("../../assets/icon-twitter.svg", () => "mocked-tt-icon");

describe("Footer component", () => {
  it("renders with correct content", () => {
    render(<Footer />);

    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    expect(screen.getByAltText("Facebook Icon")).toBeInTheDocument();
    expect(screen.getByAltText("Twitter Icon")).toBeInTheDocument();
    expect(screen.getByAltText("Pinterest Icon")).toBeInTheDocument();
    expect(screen.getByAltText("Instagram Icon")).toBeInTheDocument();
  });

  it("renders with correct navigation options", () => {
    render(<Footer />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Community")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });
});
