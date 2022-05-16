const Product = require("../models/product.model");
const productRoutes = require("../routes/product.routes");

module.exports = {
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => {
        res.status(200).json(newProduct);
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            message: "Something went wrong while adding a product",
            error: err,
          });
      });
  },
  getProducts: (req, res) => {
    Product.find({})
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            message: "Something went wrong while getting a product",
            error: err,
          });
      });
  },
  getProductByID: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            message: "something went wrong while get an product id",
            error: err,
          });
      });
  },
  updateProduct: (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateOne) => {
        res.status(200).json(updateOne);
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            message: "something went wrong while updating a product",
            error: err,
          });
      });
  },
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((deleteOne) => {
        res.status(200).json(deleteOne);
      })
      .catch((err) => {
        res
          .status(400)
          .json({
            message: "something went wrong while deleting a product",
            error: err,
          });
      });
  },
};
