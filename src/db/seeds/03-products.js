const sliceData = require("../../utils/sliceProductsSeedData");
const { generateProducts } = require("../../utils/dbSeedHelpers");

const products = generateProducts();
const slices = sliceData(products);

exports.seed = function (knex) {
  return knex("products")
    .del()
    .then(() => knex("products").insert(slices._1))
    .then(() => knex("products").insert(slices._2))
    .then(() => knex("products").insert(slices._3))
    .then(() => knex("products").insert(slices._4))
    .then(() => knex("products").insert(slices._5))
    .then(() => knex("products").insert(slices._6))
    .then(() => knex("products").insert(slices._7))
    .then(() => knex("products").insert(slices._8))
    .then(() => knex("products").insert(slices._9))
    .then(() => knex("products").insert(slices._10))
    .then(() => knex("products").insert(slices._11))
    .then(() => knex("products").insert(slices._12))
    .then(() => knex("products").insert(slices._13))
    .then(() => knex("products").insert(slices._14))
    .then(() => knex("products").insert(slices._15))
    .then(() => knex("products").insert(slices._16))
    .then(() => knex("products").insert(slices._17))
    .then(() => knex("products").insert(slices._18))
    .then(() => knex("products").insert(slices._19))
    .then(() => knex("products").insert(slices._20))
    .then(() => knex("products").insert(slices._21))
    .then(() => knex("products").insert(slices._22))
    .then(() => knex("products").insert(slices._23))
    .then(() => knex("products").insert(slices._24))
    .then(() => knex("products").insert(slices._25))
    .then(() => knex("products").insert(slices._26))
    .then(() => knex("products").insert(slices._27))
    .then(() => knex("products").insert(slices._28))
    .then(() => knex("products").insert(slices._29))
    .then(() => knex("products").insert(slices._30));
};
