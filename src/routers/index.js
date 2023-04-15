const metaRouter = require("./meta");

const route = (app) => {
  app.use("/meta", metaRouter);
};
module.exports = route;
