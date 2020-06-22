const { getAll } = require("../../db/models/global");
const Product = require("../../db/models/products");
const Provider = require("../../db/models/dispensaries");

const TABLE_NAME = "products";

const getProducts = async (req, res) => {
  try {
    const products = await getAll(TABLE_NAME);
    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json({
      message: "The products list can't be retrieved at this moment",
      reason: message,
    });
  }
};

const getProductById = (req, res) => {
  res.status(200).json(req.product);
};

const getProductProvider = async (req, res) => {
  try {
    const { dispensary_id } = req.product;
    const [provider = false] = await Product.getProvider(dispensary_id);
    const business_hours = await Provider.getDispensaryHours(dispensary_id);

    res.status(200).json({ ...provider, business_hours });
  } catch ([message]) {
    res.status(500).json({
      message: "The product provider details can't be retrieved at this moment",
      reason: message,
    });
  }
};

// const getProductById = async (req, res) => {
//   try {
//     const { product, params } = req;
//     const [provider = false] = await Product.getProvider(product.dispensary_id);
//     const [ratings = false] = await Product.getRatings(params.id);
//     const flavors = await Product.getFlavors(params.id);
//     const effects = await Product.getEffects(params.id);

//     res.status(200).json({ ...product, provider, flavors, effects, ratings });
//   } catch ([message]) {
//     res.status(500).json({
//       message: "The product details can't be retrieved at this moment",
//       reason: message,
//     });
//   }
// };

module.exports = { getProducts, getProductById, getProductProvider };
