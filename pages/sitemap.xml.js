import React from "react";
import projectsData from "../data";

const createSitemap = posts => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://projectlearn.io/learn/web-development</loc>
    </url>
    <url>
        <loc>https://projectlearn.io/learn/mobile-development</loc>
    </url>
    <url>
        <loc>https://projectlearn.io/learn/game-development</loc>
    </url>
    <url>
        <loc>https://projectlearn.io/learn/machine-learning-and-ai</loc>
    </url>
        ${posts
          .map(item => {
            return `
                    <url>
                        <loc>https://projectlearn.io/learn/${item.slug}/project/${item.title}-${item.id}</loc>
                    </url>
                `;
          })
          .join("")}
    </urlset>
    `;

const createURL = projectsData => {
  let urls = [];
  projectsData.map(project => {
    project.category.map(t => {
      const slug =
        t === "web-dev"
          ? "web-development"
          : t === "mob-dev"
          ? "mobile-development"
          : t === "game-dev"
          ? "game-development"
          : "machine-learning-and-ai";

      let urlTitle = project.title
        .toLowerCase()
        .split(" ")
        .join("-");

      urls.push({
        slug: slug,
        title: urlTitle,
        id: project.id
      });
    });
  });
  return urls;
};

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    const data = createURL(projectsData[Object.keys(projectsData)[0]]);
    res.write(createSitemap(data));
    res.end();
  }
}

export default Sitemap;
