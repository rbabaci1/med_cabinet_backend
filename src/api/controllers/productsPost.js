const axios = require("axios");
const fetch = require("node-fetch");

const { getBy } = require("../../db/models/global");
const Product = require("../../db/models/products");

const TABLE_NAME = "products";

const getRecommendations = async (req, res, next) => {
  fetch("https://medicabi.herokuapp.com/send", {
    method: "POST",
    body: req.body,
    headers: { "Content-Type": "application/json" },
  })
    .then(res => console.log(res))
    .catch(err => next(err));
  // .then(res => console.log(res));
};

module.exports = { getRecommendations };
