const supertest = require("supertest");

const cleanUpDatabase = require("../../helpers/cleanUpDatabase");
const now = require("../../helpers/getLocalDateTime");
const server = require("../server");
const request = supertest(server);

afterEach(() => cleanUpDatabase());

describe("users endpoints", () => {
  describe("create new user", () => {
    it("should respond with 400 and a message with password is required", async () => {
      const res = await request.post("/api/auth/register").send({
        firstName: "rabah",
        lastName: "babaci",
        email: "rbabaci1@gmai.com",
      });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(`"password" is required`);
    });

    it("should respond with 400 and a message with password is required", async () => {
      const res = await request.post("/api/auth/register").send({
        firstName: "rabah",
        lastName: "babaci",
        email: "rbabaci1@gmai.com",
        password: "hello there",
      });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("createdUser");
      expect(res.body.createdUser).not.toHaveProperty("password");
    });
  });
});
