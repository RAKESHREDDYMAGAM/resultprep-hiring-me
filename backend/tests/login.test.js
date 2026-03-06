const request = require("supertest");
const app = require("../src/server");

describe("Login API", () => {

  it("should login user", async () => {

    // first register the user
    await request(app)
      .post("/auth/register")
      .send({
        email: "loginuser@test.com",
        password: "123456"
      });

    // then login
    const res = await request(app)
      .post("/auth/login")
      .send({
        email: "loginuser@test.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(200);

  });

});