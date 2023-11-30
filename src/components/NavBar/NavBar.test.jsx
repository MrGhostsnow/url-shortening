import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../NavBar/index";

jest.mock("../../assets/logo.svg", () => "mocked-logo");
jest.mock("../../assets/icon-hamburger.svg", () => "mocked-menu-icon");
jest.mock("../../assets/icon-close.svg", () => "mocked-close-icon");

describe("NavBar component", () => {
  it("renders correctly in desktop view", () => {
    global.innerWidth = 1024;
    render(<NavBar />);

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders correctly in mobile view before clicking menu icon", () => {
    global.innerWidth = 320;
    render(<NavBar />);

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByAltText("menu")).toBeInTheDocument();
  });

  it("renders correctly in mobile view after clicking menu icon", () => {
    global.innerWidth = 320;
    render(<NavBar />);

    fireEvent.click(screen.getByAltText("menu"));

    expect(screen.getByTestId("overlay")).toBeInTheDocument();
    expect(screen.getByAltText("close")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Resources")).toBeInTheDocument();
  });
});
