import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

const root = resolve(__dirname, "..");

describe("Auth skeleton", () => {
  it("auth config file defines NextAuth with PrismaAdapter", () => {
    const content = readFileSync(resolve(root, "auth.ts"), "utf-8");
    expect(content).toContain("NextAuth");
    expect(content).toContain("PrismaAdapter");
    expect(content).toContain("handlers");
  });

  it("nextauth route handler exports GET and POST from handlers", () => {
    const content = readFileSync(
      resolve(root, "app", "api", "auth", "[...nextauth]", "route.ts"),
      "utf-8"
    );
    expect(content).toContain("handlers");
    expect(content).toContain("GET");
    expect(content).toContain("POST");
  });
});
