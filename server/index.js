require("dotenv").config();
const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  puppeteer = require("puppeteer"),
  port = 3988,
  axios = require("axios"),
  { scrapeGitHub } = require("./controllers/webScraper");

app.post("/api/scrape-web", scrapeGitHub);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
