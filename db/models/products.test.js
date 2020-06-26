const db = require("../dbConfig");
const Product = require("./products");
const cleanUpDatabase = require("../../helpers/cleanUpDatabase");

beforeEach(() => cleanUpDatabase());

describe("Products db models", () => {
  describe("getNumOfProducts()", () => {
    it("should return a specified number of products", async () => {
      const original = await db("products").limit(1);
      const products = await Product.getNumOfProducts(1);

      expect(original.length).toEqual(products.length);
      expect(original[0].price).toEqual(products[0].price);
    });
  });

  describe("getReviews()", () => {
    it("should return the specified product reviews", async () => {
      const original = await db("reviews as r")
        .select(
          "r.user_id",
          "r.rate",
          "r.description",
          "r.created_at",
          "updated_at"
        )
        .where({ product_id: 1 });
      const reviews = await Product.getReviews(1);

      expect(original[0]).toMatchObject(reviews[0]);
    });
  });
});
