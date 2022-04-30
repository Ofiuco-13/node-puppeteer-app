const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function start() {
  const browser = await puppeteer.launch();
  const page = browser.newPage();
  await (await page).goto("https://learnwebcode.github.io/practice-requests/");

  const names = await (
    await page
  ).evaluate(() => {
    return Array.from(document.querySelectorAll(".info strong")).map(
      (x) => x.textContent
    );
  });

  await browser.close();
}

module.exports = start;
