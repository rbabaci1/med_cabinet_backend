const db = require("../dbConfig");
const { getAll, getBy, update, remove } = require("./global");

describe("global db models", () => {
  describe("getAll()", () => {
    it("should return all entities of the specified tableName", async () => {
      const original = await db("users");
      const users = await getAll("users");

      expect(original).toEqual(users);
      expect(original.length).toEqual(users.length);
    });
  });

  describe("getBy()", () => {
    it("should return a single entity of the specified tableName and using the filter passed", async () => {
      const original = await db("products").where({ id: 10 }).first();
      const product1 = await getBy("products", { id: 10 });
      const product2 = await getBy("products", { id: 99 });

      expect(original).toEqual(product1);
      expect(original.id).toEqual(product1.id);
      expect(product2.id).toBe(99);
    });
  });
});
