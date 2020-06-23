const { getProductsFlavors } = require("../../utils/dbSeedHelpers");
const sliceData = require("../../utils/sliceProductsSeedData");

const flavors = getProductsFlavors();

const slices = sliceData(flavors);

exports.seed = function (knex) {
  return knex("flavors")
    .del()
    .then(() => knex("flavors").insert(slices._1))
    .then(() => knex("flavors").insert(slices._2))
    .then(() => knex("flavors").insert(slices._3))
    .then(() => knex("flavors").insert(slices._4))
    .then(() => knex("flavors").insert(slices._5))
    .then(() => knex("flavors").insert(slices._6))
    .then(() => knex("flavors").insert(slices._7))
    .then(() => knex("flavors").insert(slices._8))
    .then(() => knex("flavors").insert(slices._9))
    .then(() => knex("flavors").insert(slices._10))
    .then(() => knex("flavors").insert(slices._11))
    .then(() => knex("flavors").insert(slices._12))
    .then(() => knex("flavors").insert(slices._13))
    .then(() => knex("flavors").insert(slices._14))
    .then(() => knex("flavors").insert(slices._15))
    .then(() => knex("flavors").insert(slices._16))
    .then(() => knex("flavors").insert(slices._17))
    .then(() => knex("flavors").insert(slices._18))
    .then(() => knex("flavors").insert(slices._19))
    .then(() => knex("flavors").insert(slices._20))
    .then(() => knex("flavors").insert(slices._21))
    .then(() => knex("flavors").insert(slices._22))
    .then(() => knex("flavors").insert(slices._23))
    .then(() => knex("flavors").insert(slices._24))
    .then(() => knex("flavors").insert(slices._25))
    .then(() => knex("flavors").insert(slices._26))
    .then(() => knex("flavors").insert(slices._27))
    .then(() => knex("flavors").insert(slices._28))
    .then(() => knex("flavors").insert(slices._29))
    .then(() => knex("flavors").insert(slices._30));
};
