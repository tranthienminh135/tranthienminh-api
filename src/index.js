const express = require("express");
const app = express();
const port = 3000;
const route = require("./routers");
const morgan = require("morgan");

app.use(morgan("combined"));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
