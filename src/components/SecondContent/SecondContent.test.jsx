import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SecondContent from "./index";

jest.mock(
  "../../assets/icon-brand-recognition.svg",
  () => "mocked-recognition-icon"
);
jest.mock(
  "../../assets/icon-detailed-records.svg",
  () => "mocked-detailed-icon"
);
jest.mock(
  "../../assets/icon-fully-customizable.svg",
  () => "mocked-customizable-icon"
);

describe("SecondContent component", () => {
  it("renders with correct content", () => {
    render(<SecondContent />);

    expect(screen.getByText("Advanced Statistics")).toBeInTheDocument();
    expect(
      screen.getByText(/Track how your links are performing across the web/i)
    ).toBeInTheDocument();

    expect(screen.getByAltText("Brand Recognition Icon")).toBeInTheDocument();
    expect(screen.getByAltText("Detailed Records Icon")).toBeInTheDocument();
    expect(screen.getByAltText("Fully Customizable Icon")).toBeInTheDocument();

    expect(screen.getByText("Brand Recognition")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Detailed Records")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Fully Customizable")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      )
    ).toBeInTheDocument();
  });
});
