const {
  products,
  strain_names,
  strain_categories,
  strain_types,
  descreptions,
  images,
  price_units,
} = require("../db/mockData/products");

const productsDispensaries = require("../db/mockData/productsDispensaries");

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const generateProducts = () => {
  return products.map((p, i) => {
    p.strain_name = strain_names[i];
    p.strain_category = random(strain_categories) || strain_categories[0];
    p.strain_type = random(strain_types) || strain_types[0];
    p.description = random(descreptions) || descreptions[0];

    p.img_url =
      p.strain_category === "Flower"
        ? random(images.flowers)
        : p.strain_category === "Edibles"
        ? random(images.edibles)
        : p.strain_category === "Cartridges"
        ? random(images.cartridges)
        : p.strain_category === "Vaping"
        ? random(images.vapes)
        : p.strain_category === "Concentrates"
        ? random(images.concentrates)
        : p.strain_category === "Pre-rolls"
        ? random(images.pre_rolls)
        : random(images.cbd);
    p.price_unit = random(price_units);
    p.is_available = random([true, false]);

    return p;
  });
};

const generateProductsDispensaries = () => {
  return productsDispensaries.map((p_d, i) => ({
    ...p_d,
    product_name: strain_names[i],
  }));
};

module.exports = { generateProducts, generateProductsDispensaries };
