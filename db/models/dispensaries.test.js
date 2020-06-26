const db = require("../dbConfig");
const Dispensary = require("./dispensaries");
const cleanUpDatabase = require("../../helpers/cleanUpDatabase");

beforeEach(() => cleanUpDatabase());

describe("dispensaries db models", () => {
  describe("getProducts()", () => {
    it("should return all products of the specified dispensary", async () => {
      const original = await db("products").where({ dispensary_id: 1 });
      const products = await Dispensary.getProducts(1);

      expect(original[0]).toMatchObject(products[0]);
    });
  });

  describe("getBusinessHours()", () => {
    it("should return the business hours of the specified dispensary", async () => {
      const original = await db("dispensaries_hours as d_h")
        .join("dispensaries as d", "d_h.dispensary_id", "d.id")
        .select("d_h.day_of_week", "d_h.open_time", "d_h.close_time")
        .where({ dispensary_id: 1 });
      const businessHours = await Dispensary.getBusinessHours(1);

      expect(original[0].open_time).toBe(businessHours[0].open_time);
    });
  });
});
