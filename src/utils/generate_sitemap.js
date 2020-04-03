const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://projectlearn.io",
  ignoredPaths: ["admin"],
  pagesDirectory: path.join(__dirname, "../../pages"),
  targetDirectory: "out/",
  nextConfigPath: path.join(__dirname, "../../next.config.js"),
  ignoredExtensions: ["png", "jpg"],
  pagesConfig: {
    "/login": {
      priority: "0.5",
      changefreq: "daily"
    }
  }
});
