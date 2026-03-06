const request = require("supertest");
const app = require("../src/server");

describe("Task API", () => {

  it("should fail without token", async () => {
    const res = await request(app).get("/tasks");

    expect(res.statusCode).toBe(401);
  });

});