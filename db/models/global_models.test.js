const db = require("../dbConfig");
const { getAll, getBy, update, remove } = require("./global");

const mockUser = {
  firstName: "rabah",
  lastName: "babaci",
  email: "hello@gmail.com",
  password: "hello",
  created_at: "2020-06-23 11:41:40",
};

describe("global db models", () => {
  describe("getAll()", () => {
    beforeEach(async () => {
      await db("users").truncate();
      await db("users").insert(mockUser);
    });

    it("returns all entities of the specified tableName", async () => {
      const [user] = await getAll("users");

      expect(user).toEqual({ id: 1, ...mockUser });
      expect(user.lastName).toBe("babaci");
    });
  });

  describe("getBy()", () => {
    it("returns a single entity of the specified tableName via the filter passed", async () => {
      const user1 = await getBy("users", { id: 1 });
      const user2 = await getBy("users", { id: 2 });

      expect(user1.firstName).toBe("rabah");
      expect(user2).toBeFalsy();
    });
  });

  describe("update()", () => {
    it("updates an entity of the specified tableName with the provided changes via the filter", async () => {
      const changes = {
        firstName: "james",
        lastName: "bond",
        email: "james@bond.com",
      };

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
