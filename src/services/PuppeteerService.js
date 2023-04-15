const puppeteer = require("puppeteer");

const handlePuppeteer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-sandbox",
      "--no-zygote",
      "--single-process",
    ],
    ignoreDefaultArgs: ["--disable-extensions"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  const pageTitle = await page.title();

  await browser.close();
  return pageTitle;
};

module.exports = handlePuppeteer;
