const db = require("../dbConfig");
const Product = require("./products");
const cleanUpDatabase = require("../../helpers/cleanUpDatabase");

beforeEach(() => cleanUpDatabase());

const mockProduct = {
  strain_name: "Alien Rock Candy",
  strain_category: "Pre-rolls",
  strain_type: "Indica",
  flavors: "mango,banana",
  effects: "focus,dancing",
  avg_thc: 33.23,
  avg_cbd: 16.41,
  price: 17.24,
  price_unit: "gram",
  description: "From Sonoma County comes Alaska Thunder Grape ...",
  img_url: "https:// ...",
  is_available: true,
  created_at: "2020-06-24 15:31:43",
  dispensary_id: 1,
};

describe("Products db models", () => {
  describe("getDispensary()", () => {
    it("should return the specified dispensary", async () => {
      const original = await db("dispensaries").where({ id: 1 }).first();
      const dispensary = await Product.getDispensary(1);

      expect(original.address).toEqual(dispensary.address);
    });
  });

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

  describe("create()", () => {
    it("should create the provided product", async () => {
      expect(await db("products")).toHaveLength(1);

      await Product.create(mockProduct);
      expect(await db("products")).toHaveLength(2);
    });

    it("should return the product it created", async () => {
      const createdProduct = await Product.create(mockProduct);

      expect(mockProduct.img_url).toEqual(createdProduct.img_url);
    });
  });
});
