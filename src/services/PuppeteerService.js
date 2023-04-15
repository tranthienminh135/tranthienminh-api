const puppeteer = require("puppeteer");

const handlePuppeteer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  const pageTitle = await page.title();

  await browser.close();
  return pageTitle;
};

module.exports = handlePuppeteer;
