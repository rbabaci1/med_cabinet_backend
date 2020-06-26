const db = require("../dbConfig");
const Dispensary = require("./dispensaries");
const cleanUpDatabase = require("../../helpers/cleanUpDatabase");

const mockDispensary = {
  name: "Smokland",
  address: "1514 Alice st",
  city: "Oakland",
  state: "California",
  postal_code: "94612",
  phone_number: "(510) 325-0079",
  email: "oakland101@wp.com",
  logo_url: "http://dummyimage.com/228x150.jpg/5fa2dd/ffffff",
  has_delivery: true,
  created_at: "2020-06-27",
};

const mockDispensaryHours = [
  {
    dispensary_id: 1,
    day_of_week: 0,
    open_time: "09:00 AM",
    close_time: "09:00 PM",
  },
];

describe("dispensaries db models", () => {
  afterEach(() => cleanUpDatabase());

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

  describe("create()", () => {
    it("should create a dispensary", async () => {
      expect(await db("dispensaries")).toHaveLength(1);
      await Dispensary.create(mockDispensary);
      expect(await db("dispensaries")).toHaveLength(2);
    });

    it("should return the created dispensary", async () => {
      const createdDispensary = await Dispensary.create(mockDispensary);
      expect(createdDispensary.name).toEqual(mockDispensary.name);
    });
  });

  describe("insertBusinessHours()", () => {
    it("should insert business for a specified dispensary", async () => {
      expect(await db("dispensaries_hours")).toHaveLength(1);
      await Dispensary.insertBusinessHours(mockDispensaryHours);
      expect(await db("dispensaries_hours")).toHaveLength(2);
    });
  });
});
