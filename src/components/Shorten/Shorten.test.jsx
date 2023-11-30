import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shorten from "../Shorten/index";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        result: {
          short_link: "mocked-short-link",
          original_link: "mocked-original-link",
        },
      }),
  })
);

describe("Shorten component", () => {
  it("renders correctly and shortens the link", async () => {
    render(<Shorten />);
    fireEvent.change(screen.getByPlaceholderText("Shorten a link here..."), {
      target: { value: "https://example.com" },
    });

    fireEvent.click(screen.getByText("Shorten it!"));

    await screen.findByText("mocked-original-link");

    expect(screen.getByText("mocked-original-link")).toBeInTheDocument();
    expect(screen.getByText("mocked-short-link")).toBeInTheDocument();

    expect(screen.getByText("Copy")).toBeInTheDocument();
  });

  it("shows a warning when trying to shorten an empty link", () => {
    render(<Shorten />);

    fireEvent.click(screen.getByText("Shorten it!"));

    expect(screen.getByText("Add a link")).toBeInTheDocument();
  });
});
