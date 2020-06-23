const { getProductsEffects } = require("../../utils/dbSeedHelpers");
const sliceData = require("../../utils/sliceProductsSeedData");

const effects = getProductsEffects();

const slices = sliceData(effects);

exports.seed = function (knex) {
  return knex("effects")
    .del()
    .then(() => knex("effects").insert(slices._1))
    .then(() => knex("effects").insert(slices._2))
    .then(() => knex("effects").insert(slices._3))
    .then(() => knex("effects").insert(slices._4))
    .then(() => knex("effects").insert(slices._5))
    .then(() => knex("effects").insert(slices._6))
    .then(() => knex("effects").insert(slices._7))
    .then(() => knex("effects").insert(slices._8))
    .then(() => knex("effects").insert(slices._9))
    .then(() => knex("effects").insert(slices._10))
    .then(() => knex("effects").insert(slices._11))
    .then(() => knex("effects").insert(slices._12))
    .then(() => knex("effects").insert(slices._13))
    .then(() => knex("effects").insert(slices._14))
    .then(() => knex("effects").insert(slices._15))
    .then(() => knex("effects").insert(slices._16))
    .then(() => knex("effects").insert(slices._17))
    .then(() => knex("effects").insert(slices._18))
    .then(() => knex("effects").insert(slices._19))
    .then(() => knex("effects").insert(slices._20))
    .then(() => knex("effects").insert(slices._21))
    .then(() => knex("effects").insert(slices._22))
    .then(() => knex("effects").insert(slices._23))
    .then(() => knex("effects").insert(slices._24))
    .then(() => knex("effects").insert(slices._25))
    .then(() => knex("effects").insert(slices._26))
    .then(() => knex("effects").insert(slices._27))
    .then(() => knex("effects").insert(slices._28))
    .then(() => knex("effects").insert(slices._29))
    .then(() => knex("effects").insert(slices._30));
};
