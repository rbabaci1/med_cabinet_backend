const supertest = require("supertest");

const cleanUpDatabase = require("../../helpers/cleanUpDatabase");
const server = require("../server");
const request = supertest(server);

let mockUser = {
  firstName: "rabah",
  lastName: "babaci",
  email: "test@gmail.com",
};

describe("users endpoints", () => {
  /*******************************   SIGNUP   **********************************/
  describe("User sign up", () => {
    it("should respond with 400 and a message saying password is required", async () => {
      const res = await request.post("/api/auth/register").send(mockUser);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(`"password" is required`);
    });

    it("should respond with 201 and return the created user without the password", async () => {
      const res = await request.post("/api/auth/register").send({
        ...mockUser,
        password: "correct password",
      });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("createdUser");
      expect(res.body.createdUser).not.toHaveProperty("password");
    });

    it("should respond with 409", async () => {
      const res = await request.post("/api/auth/register").send({
        ...mockUser,
        password: "correct password",
      });

      expect(res.status).toBe(409);
      expect(res.body).toHaveProperty("success", false);
    });
  });

  /*******************************   LOGIN   **********************************/
  describe("User login", () => {
    it("should respond with 400 and a message saying email is required", async () => {
      const res = await request.post("/api/auth/login").send({
        password: "hello there",
      });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(`"email" is required`);
    });

    it("should respond with 401 and a message", async () => {
      const res = await request.post("/api/auth/login").send({
        email: "test@gmail.com",
        password: "wrong password",
      });

      expect(res.status).toBe(401);
      expect(res.body).toHaveProperty("message");
    });

    it("should respond with 200 and the logged user info", async () => {
      const res = await request.post("/api/auth/login").send({
        email: "test@gmail.com",
        password: "correct password",
      });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("logged_user");
      expect(res.body).toHaveProperty("token");

      cleanUpDatabase();
    });
  });
});
