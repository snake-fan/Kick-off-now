import { describe, it, expect, afterAll } from "vitest";
import { prisma } from "@/lib/prisma";

describe("Database connectivity", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("can connect and execute a raw query", async () => {
    const result: Array<{ connected: number }> =
      await prisma.$queryRaw`SELECT 1 AS connected`;
    expect(result[0].connected).toBe(1);
  });

  it("can create, read, and delete a User record", async () => {
    const email = `test-${Date.now()}@example.com`;
    const user = await prisma.user.create({
      data: { email, name: "Test User" },
    });
    expect(user.id).toBeDefined();
    expect(user.email).toBe(email);

    const found = await prisma.user.findUnique({ where: { email } });
    expect(found).not.toBeNull();
    expect(found!.name).toBe("Test User");

    await prisma.user.delete({ where: { id: user.id } });
  });
});
