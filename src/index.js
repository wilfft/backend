const express = require("express");
const axios = require("axios");
const cors = require("cors");
const routes = require("./routes");
const app = express();
app.use(cors());
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
app.use(routes);

axios.defaults.baseURL = "http://api.github.com";

axios.defaults.headers.common["Authorization"] =
  "token 7de336784780ddbd223ba9e07078ed715d04098d";
