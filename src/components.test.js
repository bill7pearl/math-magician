import renderer from "react-test-renderer";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("test rendering", () => {
  test("test if App components render correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Test Calculator interaction", () => {
  test("test buttons interactions with screen", () => {
    render(<App />);
    const btnCalculator = document.querySelector(".button");
    fireEvent.click(btnCalculator);
    const result = screen.getAllByText("0")[0];
    const btnZero = screen.getAllByText("0")[1];

    fireEvent.click(screen.getByText("2"));
    fireEvent.click(btnZero);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));

    expect(result).toHaveTextContent("2023");
  });

  test("test addition with calculations", () => {
    render(<App />);
    const btnCalculator = document.querySelector(".button");
    fireEvent.click(btnCalculator);
    const result = screen.getAllByText("0")[0];
    fireEvent.click(screen.getByText("AC"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(result).toHaveTextContent((5 + 12).toString());
  });
});
