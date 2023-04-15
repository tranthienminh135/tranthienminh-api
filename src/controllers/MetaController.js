const handlePuppeteer = require("../services/PuppeteerService");

class MetaController {
  index(req, res) {
    handlePuppeteer()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new MetaController();
