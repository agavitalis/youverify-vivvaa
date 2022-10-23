import request from "supertest";
import {app} from '../app'

describe("Test app.ts route file", () => {
  test("Test if App is running successfully", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Welcome to YouVerify Customer-Service API" });
  });
});