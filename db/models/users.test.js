const db = require("../dbConfig");
const User = require("./users");

describe("users.js db models", () => {
  describe("getProducts()", () => {
    it("returns all the products for the specified user via user id", async () => {
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

  describe("getReviews()", () => {
    it("returns all the reviews for the specified user via user id", async () => {
      const reviews = await User.getReviews(3);
      const origin = await db("reviews as r")
        .select(
          "r.product_id",
          "r.rate",
          "r.description",
          "r.created_at",
          "updated_at"
        )
        .where({ user_id: 3 });

      expect(reviews.length).toEqual(origin.length);
      expect(reviews[0].created_at).toEqual(origin[0].created_at);
    });
  });
});
