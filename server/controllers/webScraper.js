const puppeteer = require("puppeteer"),
  axios = require("axios"),
  { GITHUB_USERNAME, GITHUB_PASSWORD } = process.env;

const scrapeGitHub = async (req, res) => {
  const { userName, password } = req.body;
  // const userName = "#login_field";
  // const password = "#password";
  const sign_in = "input.btn";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://github.com/login");
  await page.click("#login_field");
  await page.keyboard.type(GITHUB_USERNAME);
  await page.click("#password");
  await page.keyboard.type(GITHUB_PASSWORD);
  await page.click(sign_in);
  await page.goto("https://github.com/Jarid11/RickAndMorty_API_APP");
  // const selector = document.querySelector(
  //   "body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--bright.d-lg-flex.flex-justify-between.flex-auto > div > span > div > a:nth-child(1)"
  // );
  // await page.click(selector);
  // const cool = await page.screenshot({ path: "example.png" });
  // await browser.close();
};

module.exports = {
  scrapeGitHub
};
