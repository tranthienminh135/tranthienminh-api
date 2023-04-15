const puppeteer = require("puppeteer");

const handlePuppeteer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: undefined,
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  const pageTitle = await page.title();

  await browser.close();
  return pageTitle;
};

module.exports = handlePuppeteer;
