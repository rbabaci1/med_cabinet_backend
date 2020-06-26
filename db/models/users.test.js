const db = require("../dbConfig");
const User = require("./users");

describe("users.js db models", () => {
  describe("getProducts()", () => {
    it("returns all the products of a specified user via user id", async () => {
      const products = await User.getProducts(1);

      console.log(products);
    });
  });
});
