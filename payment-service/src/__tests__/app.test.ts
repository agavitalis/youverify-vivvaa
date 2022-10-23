import request from "supertest";
import {app} from '../app'

describe("Test app.ts route file", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Welcome to Yandit AirQuality API" });
  });
});