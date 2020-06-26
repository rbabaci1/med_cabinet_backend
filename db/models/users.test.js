const db = require("../dbConfig");
const User = require("./users");

describe("users.js db models", () => {
  describe("getProducts()", () => {
    it("returns all the products of a specified user via user id", async () => {
      const products = await User.getProducts(3);

      const origin = await db("users_carts as u_c")
        .join("users as u", "u_c.user_id", "u.id")
        .join("products as p", "u_c.product_id", "p.id")
        .select("p.*")
        .where({ user_id: 3 });

      expect(products.length).toEqual(origin.length);
      expect(products[0].strain_name).toEqual(origin[0].strain_name);
    });
  });
});
