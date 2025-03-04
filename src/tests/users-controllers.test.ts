import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("UsersController", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.user.delete({ where: { id: user_id } });
  });

  it("should create a new user successfully", async () => {
    const res = await request(app).post("/users").send({
      name: "Test User",
      email: "testuser@email.com",
      password: "password123456",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Test User");

    user_id = res.body.id;
  });

  it("should throw an error if user with same email already exists", async () => {
    const res = await request(app).post("/users").send({
      name: "Duplicate User",
      email: "testuser@email.com",
      password: "123456",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toBe("User with same email already exists");
  });

  it("should throw a validation error if email is invalid", async () => {
    const res = await request(app).post("/users").send({
      name: "Test User",
      email: "invalid-email",
      password: "password123456",
    });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Validation error");
  });
});
