const db = require("../db/dbConfig");

const mockUser = {
  firstName: "Rabah",
  lastName: "Babaci",
  email: "rbabaci1@gmail.com",
  password: "212139",
  created_at: "03-27-1994",
};
const mockDispensary = {
  name: "DabZ",
  address: "7080 Buena Vista Circle",
  city: "Sarasota",
  state: "Florida",
  postal_code: "34238",
  phone_number: "(941) 918-1372",
  email: "vsherrard0@constantcontact.com",
  logo_url: "http://dummyimage.com/235x127.png/dddddd/000000",
  has_delivery: true,
  created_at: "2020-02-29 11:20:28",
};
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
  img_url: "https:// ...........",
  is_available: true,
  created_at: "2020-02-29 11:20:28",
  dispensary_id: 1,
};
const mockUserCart = {
  user_id: 1,
  product_id: 1,
  created_at: "2020-05-02 20:43:39",
  updated_at: "2019-07-21 20:38:50",
};
const mockReview = {
  user_id: 1,
  product_id: 1,
  rate: 5,
  description: "Restriction of Carina with",
  created_at: "2019-08-21 11:38:01",
  updated_at: "2019-08-22 11:37:00",
};
const mockDispensaryHours = {
  dispensary_id: 1,
  day_of_week: 1,
  open_time: "09:00 AM",
  close_time: "08:00 PM",
};

module.exports = async () => {
  await db("users").truncate();
  await db("dispensaries").truncate();
  await db("products").truncate();
  await db("users_carts").truncate();
  await db("reviews").truncate();
  await db("dispensaries_hours").truncate();

  await db("users").insert(mockUser);
  await db("dispensaries").insert(mockDispensary);
  await db("products").insert(mockProduct);
  await db("users_carts").insert(mockUserCart);
  await db("reviews").insert(mockReview);
  await db("dispensaries_hours").insert(mockDispensaryHours);
};
