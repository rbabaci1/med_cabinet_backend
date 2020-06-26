const db = require("../dbConfig");
const { getAll, getBy, update, remove } = require("./global");
const cleanUpDatabase = require("../../helpers/cleanUpDatabase");

beforeEach(() => cleanUpDatabase());

describe("global db models", () => {
  describe("getAll()", () => {
    it("returns all entities of the specified tableName", async () => {
      const users = await getAll("users");
      const origin = await db("users");

      expect(users).toHaveLength(1);
      expect(origin[0].firstName).toEqual(users[0].firstName);
    });
  });

  describe("getBy()", () => {
    it("returns a single entity of the specified tableName via the filter passed", async () => {
      const user = await getBy("users", { id: 1 });
      const origin = await db("users").where({ id: 1 }).first();

      expect(origin.lastName).toEqual(user.lastName);
    });
  });

  describe("update()", () => {
    it("updates an entity of the specified tableName with the provided changes via the filter", async () => {
      const changes = {
        firstName: "james",
        lastName: "bond",
        email: "james@bond.com",
      };
      const user = await db("users").where({ id: 1 }).first();
      expect(user.email).toBe("rbabaci1@gmail.com");

      await update("users", changes, { id: 1 });
      const updatedUser = await db("users").where({ id: 1 }).first();

      expect(updatedUser.email).toBe("james@bond.com");
    });
  });

  describe("remove()", () => {
    it("removes the specified entity via the filter", async () => {
      const success = await remove("users", { id: 1 });
      const user = await db("users").where({ id: 1 }).first();

      expect(success).toBe(1);
      expect(user).toBeFalsy();
    });
  });
});
