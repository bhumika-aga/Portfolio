import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page content", () => {
  render(<App />);
  const nameElement = screen.getAllByText(/Bhumika Agarwal/i);
  expect(nameElement.length).toBeGreaterThan(0);
});
