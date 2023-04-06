const express = require("express");
const app = express();

app.use(express.json())
 
//route imports

const product = require("./routes/productRoute");
const productdes = require("./routes/productRoute");


app.use("/api/v1",product);

app.use("/api/v1/new",productdes);


module.exports = app;
