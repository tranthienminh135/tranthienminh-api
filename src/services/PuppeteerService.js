const puppeteer = require("puppeteer");

const handlePuppeteer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto("https://www.facebook.com");

  await page.waitForNavigation();

  setTimeout(async () => {
    await browser.close();
  }, 3000);
};

module.exports = handlePuppeteer;
