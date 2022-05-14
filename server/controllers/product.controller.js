const Product = require("../models/product.model");

module.exports = {
  createProduct: (res, req) => {
    Product.create(req.body).then((newProduct) => {
      res.json(newProduct).catch((err) => {
        console.log(`Error in the Controller ${err}`);
      });
    });
  },
};
