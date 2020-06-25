const db = require("../dbConfig");
const globals = require("./global");
const { getAll } = require("./global");
const { expectCt } = require("helmet");

describe("global db models", () => {
  describe("getAll()", () => {
    it("should return all entities of the specified tableName", async () => {
      const original = await db("users");
      const users = await getAll("users");

      expect(original).toEqual(users);
      expect(original.length).toEqual(users.length);
    });
  });
});
