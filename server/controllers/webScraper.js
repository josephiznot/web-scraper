const puppeteer = require("puppeteer");

const scrapeGitHub = (req, res) => {
  // const { selector } = req.body;
  console
    .log(req.body)(async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage({ headless: false });
      await page.goto("https://github.com/");
      await page.click(selector);
      const cool = await page.screenshot({ path: "example.png" });
      await browser.close();
    })()
    .catch(console.log);
  console.log("hit");
};

module.exports = {
  scrapeGitHub
};
