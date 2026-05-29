import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the app name", () => {
    render(<Home />);
    expect(screen.getByText(/kick.?off.?now/i)).toBeInTheDocument();
  });

  it("renders a heading element", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
