const mongoose = require("mongoose");
const dataBase = "products";
mongoose
  .connect(`mongodb://localhost/${dataBase}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to ${dataBase} database!`))
  .catch((err) => console.log(err));
