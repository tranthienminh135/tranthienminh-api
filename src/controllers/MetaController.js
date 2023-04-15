const handlePuppeteer = require("../services/PuppeteerService");

class MetaController {
  index(req, res) {
    handlePuppeteer().then((data) => {
      res.send(data);
    });
  }
}
module.exports = new MetaController();
