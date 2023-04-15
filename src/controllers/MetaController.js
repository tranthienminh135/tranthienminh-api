const handlePuppeteer = require("../services/PuppeteerService");

class MetaController {
  index(req, res) {
    handlePuppeteer().then(() => {
      console.log("success");
    });
    res.send("Meta index");
  }
}
module.exports = new MetaController();
