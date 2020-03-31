// next.config.js
const withImages = require("next-images");
const projectsData = require("./data.js");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) =>
  withImages({
    exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      const paths = {
        "/": { page: "/" },
        "/learn/web-development": {
          page: "/learn/web-development"
        },
        "/learn/game-development": {
          page: "/learn/game-development"
        },
        "/learn/mobile-development": {
          page: "/learn/mobile-development"
        },
        "/learn/machine-learning-and-ai": {
          page: "/learn/machine-learning-and-ai"
        }
      };
      if (phase !== PHASE_DEVELOPMENT_SERVER) {
        projectsData[Object.keys(projectsData)[0]].map(project => {
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

            paths[`/learn/${slug}/project/${urlTitle}-${project.id}`] = {
              page: `/learn/${slug}/project/[id]`,
              query: { id: `${urlTitle}-${project.id}` }
            };
          });
        });
      }

      return paths;
    }
    // experimental: {
    //   modern: true,
    //   async rewrites () {
    //     return [
    //       {source: '/sitemap.xml', destination: '/api/sitemap'},
    //     ]
    //   },
    //   catchAllRouting: true
    // }
  });
