const puppeteer = require("puppeteer");
const chromium = require("chromium");

const handlePuppeteer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: chromium.path,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  const pageTitle = await page.title();

  await browser.close();
  return pageTitle;
};

module.exports = handlePuppeteer;
