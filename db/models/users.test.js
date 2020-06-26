const db = require("../dbConfig");
const User = require("./users");
const cleanUpDatabase = require("../../helpers/cleanUpDatabase");

beforeEach(() => cleanUpDatabase());

const mockUser = {
  firstName: "test99",
  lastName: "test100",
  email: "hello@gmail.com",
  password: "hello",
  created_at: "2020-06-23 11:41:40",
};

const mockCartProduct = {
  user_id: 2,
  product_id: 1,
  created_at: "2020-06-23 11:41:40",
  updated_at: "2020-06-23 11:41:40",
};

const mockReview = {
  user_id: 2,
  product_id: 1,
  rate: 5,
  description: "Restriction of Carina with",
  created_at: "2019-08-21 11:38:01",
  updated_at: "2019-08-22 11:37:00",
};

describe("users.js db models", () => {
  describe("getProducts()", () => {
    it("should return all the products for the specified user via user id", async () => {
      const products = await User.getProducts(1);
      const origin = await db("users_carts as u_c")
        .join("users as u", "u_c.user_id", "u.id")
        .join("products as p", "u_c.product_id", "p.id")
        .select("p.*")
        .where({ user_id: 1 });

      expect(products.length).toEqual(origin.length);
      expect(products[0].strain_name).toEqual(origin[0].strain_name);
    });
  });

  describe("getReviews()", () => {
    it("should return all the reviews for the specified user via user id", async () => {
      const reviews = await User.getReviews(1);
      const origin = await db("reviews as r")
        .select(
          "r.product_id",
          "r.rate",
          "r.description",
          "r.created_at",
          "updated_at"
        )
        .where({ user_id: 1 });

      expect(reviews.length).toEqual(origin.length);
      expect(reviews[0].created_at).toEqual(origin[0].created_at);
    });
  });

  describe("create()", () => {
    it("should insert the provided user", async () => {
      const users = await db("users");
      expect(users).toHaveLength(1);
      await User.create(mockUser);
      expect(await db("users")).toHaveLength(2);
    });

    it("should return what the user it inserted", async () => {
      const createdUser = await User.create(mockUser);
      expect(createdUser.lastName).toBe("test100");
    });
  });

  describe("addToCart()", () => {
    it("should add a product to the user's cart", async () => {
      await db("users").insert(mockUser);

      const cart = await db("users_carts");
      expect(cart).toHaveLength(1);

      await User.addToCart(mockCartProduct);
      expect(await db("users_carts")).toHaveLength(2);
    });
  });

  describe("createReview()", () => {
    it("should create a user's review", async () => {
      await db("users").insert(mockUser);

      const reviews = await db("reviews");
      expect(reviews).toHaveLength(1);

      await User.createReview(mockReview);
      expect(await db("reviews")).toHaveLength(2);
    });
  });
});
