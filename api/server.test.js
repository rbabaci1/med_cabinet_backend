const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it('should return 200 OK with { message: "*** API is up! ***"}', async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ message: "*** API is up! ***" });
    });
  });
});
