import request, { Response } from "supertest";

import app from "../server";

describe("POST /register", () => {
  it("should responds with json", async () => {
    const res: Response = await request(app)
      .post("/register")
      .send({
        username: "test@mail.com",
        password: "test1234",
      })
      .set("Accept", "application/json");

    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.status).toEqual(200);
  });
});

describe("POST /signin", () => {
  it("should authenticate user", async () => {
    const res: Response = await request(app).post("/signin").send({
      username: "test@mail.com",
      password: "test1234",
    });

    expect(res.status).toEqual(200);
    expect(res.body["token"]).toBeTruthy();
  });

  it("should not authenticate user", async () => {
    const res: Response = await request(app).post("/signin").send({
      username: "test@mail.com",
      password: "some-random-password", // wrong password
    });

    expect(res.status).toEqual(401);
  });
});
