// generate-pdf.js
const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = `file://${path.join(__dirname, "index.html")}`;
  await page.goto(filePath, { waitUntil: "networkidle0" });

await page.pdf({
  path: "CV_Alexandre_Vens.pdf",
  format: "A4",
  printBackground: false,
  margin: { top: "0mm", bottom: "0mm", left: "5mm", right: "5mm" },
  preferCSSPageSize: true  // IMPORTANT pour respecter @page et @media print
});

  await browser.close();
})();


