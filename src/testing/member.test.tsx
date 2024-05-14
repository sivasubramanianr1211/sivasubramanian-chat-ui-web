import { render, screen } from "@testing-library/react";
import { Member } from "../components";
import { act } from "react";

test("To check if Messages text in header component is rendered correctly", () => {
  const { getByText } = render(<Member />);
  expect(getByText("Messages")).toBeInTheDocument();
});

test("to check the input placeholder", () => {
  act(() => {
    render(<Member />);
  });
  const svgElement = screen.getByTestId("plus-icon");
  expect(svgElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Search messages")).toBeInTheDocument();
});

