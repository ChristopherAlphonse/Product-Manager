const mongoose = require("mongoose");
const dataBase = "products";
mongoose
  .connect(`mongodb://localhost/${dataBase}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to the ${dataBase} database!`);
  })
  .catch((err) => {
    console.log(`Error in the config server file${err}`);
  });
