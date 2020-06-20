const { strain_names } = require("../mockData/products");

let productsDispensaries = [
  {
    dispensary_id: 1,
  },
  {
    dispensary_id: 2,
  },
  {
    dispensary_id: 3,
  },
  {
    dispensary_id: 4,
  },
  {
    dispensary_id: 5,
  },
  {
    dispensary_id: 6,
  },
  {
    dispensary_id: 7,
  },
  {
    dispensary_id: 8,
  },
  {
    dispensary_id: 9,
  },
  {
    dispensary_id: 10,
  },
  {
    dispensary_id: 11,
  },
  {
    dispensary_id: 12,
  },
  {
    dispensary_id: 13,
  },
  {
    dispensary_id: 14,
  },
  {
    dispensary_id: 15,
  },
  {
    dispensary_id: 16,
  },
  {
    dispensary_id: 17,
  },
  {
    dispensary_id: 18,
  },
  {
    dispensary_id: 19,
  },
  {
    dispensary_id: 20,
  },
  {
    dispensary_id: 21,
  },
  {
    dispensary_id: 22,
  },
  {
    dispensary_id: 23,
  },
  {
    dispensary_id: 24,
  },
  {
    dispensary_id: 25,
  },
  {
    dispensary_id: 26,
  },
  {
    dispensary_id: 27,
  },
  {
    dispensary_id: 28,
  },
  {
    dispensary_id: 29,
  },
  {
    dispensary_id: 30,
  },
  {
    dispensary_id: 31,
  },
  {
    dispensary_id: 32,
  },
  {
    dispensary_id: 33,
  },
  {
    dispensary_id: 34,
  },
  {
    dispensary_id: 35,
  },
  {
    dispensary_id: 36,
  },
  {
    dispensary_id: 37,
  },
  {
    dispensary_id: 38,
  },
  {
    dispensary_id: 39,
  },
  {
    dispensary_id: 40,
  },
  {
    dispensary_id: 41,
  },
  {
    dispensary_id: 42,
  },
  {
    dispensary_id: 43,
  },
  {
    dispensary_id: 44,
  },
  {
    dispensary_id: 45,
  },
  {
    dispensary_id: 46,
  },
  {
    dispensary_id: 47,
  },
  {
    dispensary_id: 48,
  },
  {
    dispensary_id: 49,
  },
  {
    dispensary_id: 50,
  },
  {
    dispensary_id: 51,
  },
  {
    dispensary_id: 52,
  },
  {
    dispensary_id: 53,
  },
  {
    dispensary_id: 54,
  },
  {
    dispensary_id: 55,
  },
  {
    dispensary_id: 56,
  },
  {
    dispensary_id: 57,
  },
  {
    dispensary_id: 58,
  },
  {
    dispensary_id: 59,
  },
  {
    dispensary_id: 60,
  },
  {
    dispensary_id: 61,
  },
  {
    dispensary_id: 62,
  },
  {
    dispensary_id: 63,
  },
  {
    dispensary_id: 64,
  },
  {
    dispensary_id: 65,
  },
  {
    dispensary_id: 66,
  },
  {
    dispensary_id: 67,
  },
  {
    dispensary_id: 68,
  },
  {
    dispensary_id: 69,
  },
  {
    dispensary_id: 70,
  },
  {
    dispensary_id: 71,
  },
  {
    dispensary_id: 72,
  },
  {
    dispensary_id: 73,
  },
  {
    dispensary_id: 74,
  },
  {
    dispensary_id: 75,
  },
  {
    dispensary_id: 76,
  },
  {
    dispensary_id: 77,
  },
  {
    dispensary_id: 78,
  },
  {
    dispensary_id: 79,
  },
  {
    dispensary_id: 80,
  },
  {
    dispensary_id: 81,
  },
  {
    dispensary_id: 82,
  },
  {
    dispensary_id: 83,
  },
  {
    dispensary_id: 84,
  },
  {
    dispensary_id: 85,
  },
  {
    dispensary_id: 86,
  },
  {
    dispensary_id: 87,
  },
  {
    dispensary_id: 88,
  },
  {
    dispensary_id: 89,
  },
  {
    dispensary_id: 90,
  },
  {
    dispensary_id: 91,
  },
  {
    dispensary_id: 92,
  },
  {
    dispensary_id: 93,
  },
  {
    dispensary_id: 94,
  },
  {
    dispensary_id: 95,
  },
  {
    dispensary_id: 96,
  },
  {
    dispensary_id: 97,
  },
  {
    dispensary_id: 98,
  },
  {
    dispensary_id: 99,
  },
  {
    dispensary_id: 100,
  },
];

productsDispensaries = productsDispensaries.map((p_d, i) => ({
  ...p_d,
  product_name: strain_names[i],
}));

module.exports = productsDispensaries;
