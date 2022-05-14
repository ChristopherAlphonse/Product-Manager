const mongoose = require("mongoose");

const productDataBase = "products";

mongoose
  .connect(`mongodb://localhost/${productDataBase}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to the ${productDataBase} database!`);
  })
  .catch((err) => console.log(`Something went wrong ${err}`));
