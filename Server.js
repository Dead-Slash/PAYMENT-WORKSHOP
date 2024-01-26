const express = require("express");
const ConnectDB = require("./Configuration/Config");
const Product_router = require("./Router/Router");
const app = express();
const port = 8001;

app.use(express.json());
ConnectDB();
app.use("/product", Product_router);
app.listen(port, console.log("server is runing"));
