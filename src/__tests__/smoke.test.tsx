import { describe, it, expect } from "vitest";

describe("Smoke test", () => {
  it("health endpoint returns ok status", async () => {
    const { GET } = await import("@/app/api/health/route");
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.status).toBe("ok");
  });

  it("home page renders the app name", async () => {
    const { default: Home } = await import("@/app/page");
    const { render, screen } = await import("@testing-library/react");
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /kick.?off.?now/i
    );
  });
});
