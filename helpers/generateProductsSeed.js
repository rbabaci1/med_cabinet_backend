const {
  products,
  strain_categories,
  images,
  price_units,
} = require("../db/mockData/products");

const random1 = arr => arr[Math.floor(Math.random() * arr.length)];
const random2 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProducts = () => {
  return products.map(p => {
    p.strain_category = random1(strain_categories) || strain_categories[0];
    p.avg_thc = random2(3, 40);
    p.avg_cbd = random2(5, 40);
    p.price = random2(5, 50);
    p.created_at = "2019-10-17 08:11:20";
    p.dispensary_id = random2(1, 30);
    // p.description = p.description.slice(0, 254);

    p.img_url = "hello";
    p.strain_category === "Flower"
      ? random1(images.flowers)
      : p.strain_category === "Edibles"
      ? random1(images.edibles)
      : p.strain_category === "Cartridges"
      ? random1(images.cartridges)
      : p.strain_category === "Vaping"
      ? random1(images.vapes)
      : p.strain_category === "Concentrates"
      ? random1(images.concentrates)
      : p.strain_category === "Pre-rolls"
      ? random1(images.pre_rolls)
      : random1(images.cbd);
    p.price_unit = random1(price_units);
    p.is_available = random1([true, false]);

    return p;
  });
};

module.exports = { generateProducts };
