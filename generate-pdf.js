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
  margin: { top: "5mm", bottom: "5mm", left: "15mm", right: "15mm" },
  preferCSSPageSize: true  // IMPORTANT pour respecter @page et @media print
});

  await browser.close();
})();


