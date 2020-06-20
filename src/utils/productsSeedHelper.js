const {
  products,
  strain_names,
  strain_categories,
  strain_types,
  descreptions,
  images,
  price_units,
} = require("../db/mockData/products");

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const generateProducts = () => {
  return products.map((p, i) => {
    p.strain_name = strain_names[i];
    p.strain_category = random(strain_categories);
    p.strain_type = random(strain_types);
    p.description = random(descreptions);
    p.img_url =
      strain_category === "Flower"
        ? random(images.flowers)
        : strain_category === "Edibles"
        ? random(images.edibles)
        : strain_category === "Cartridges"
        ? random(images.cartridges)
        : strain_category === "Vaping"
        ? random(images.vapes)
        : strain_category === "Concentrates"
        ? random(images.concentrates)
        : strain_category === "Pre-rolls"
        ? random(images.pre_rolls)
        : random(images.cbd);
    p.price_unit = random(price_units);
    p.is_available = random([true, false]);
  });
};

module.exports = generateProducts;
