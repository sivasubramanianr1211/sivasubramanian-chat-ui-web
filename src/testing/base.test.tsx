import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("to check the main root App component render", () => {
  render(<App />);
  const appElement = screen.getByTestId("app");
  expect(appElement).toBeInTheDocument();
});
