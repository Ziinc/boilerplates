import { render, screen } from "@testing-library/react";
import App from "../src/App";
test("home page rendering", () => {
  render(<App />);
  screen.findByText(/Home/);
});
