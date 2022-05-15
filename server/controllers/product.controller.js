const Product = require("../models/product.model.js");

module.exports = {
  createProduct: (req, res) =>
    Product.create(req.body)
      .then((newProduct) => {
        res.json(newProduct);
      })
      .catch((err) => {
        console.log(`Error found in the controller server file${err}`);
      }),
};
