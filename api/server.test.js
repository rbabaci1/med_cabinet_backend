const supertest = require("supertest");

const server = require("./server");
const request = supertest(server);

describe("server.js", () => {
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it('should return 200 OK with { message: "*** API is up! ***"}', async () => {
      const res = await request.get("/");
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ message: "*** API is up! ***" });
    });
  });
});
