require("dotenv").config();
const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  puppeteer = require("puppeteer"),
  port = 3988;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://github.com/steven-isbell/resources/blob/master/sql/README.md"
  );
  const cool = await page.screenshot({ path: "example.png" });
  await browser.close();
})();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
