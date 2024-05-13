const withImages = require("next-images");
const projectsData = require("./data.js");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const glob = require("glob");

module.exports = (phase, { defaultConfig }) =>
  withImages({
    webpack: function (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
      return config;
    },
    env: {
      EMAIL_API: process.env.EMAIL_API
    },
    images: {
      disableStaticImages: true
    },
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      const paths = {
        "/": { page: "/", query: { __nextDefaultLocale: '' } },
        "/blog": { page: "/blog" },
        "/learn/web-development": {
          page: "/learn/web-development",
        },
        "/learn/game-development": {
          page: "/learn/game-development",
        },
        "/learn/mobile-development": {
          page: "/learn/mobile-development",
        },
        "/learn/machine-learning-and-ai": {
          page: "/learn/machine-learning-and-ai",
        },
      };

      if (phase !== PHASE_DEVELOPMENT_SERVER) {
        projectsData[Object.keys(projectsData)[0]].map((project) => {
          project.category.map((t) => {
            const slug =
              t === "web-dev"
                ? "web-development"
                : t === "mob-dev"
                  ? "mobile-development"
                  : t === "game-dev"
                    ? "game-development"
                    : "machine-learning-and-ai";

            let urlTitle = project.title.toLowerCase().split(" ").join("-");
            let imageUrl = project.imageUrl; // Add this line to get the image URL from project data

            paths[`/learn/${slug}/project/${urlTitle}-${project.id}`] = {
              page: `/learn/${slug}/project/[id]`,
              query: { id: `${urlTitle}-${project.id}`, imageUrl }, // Pass imageUrl as query parameter
            };
          });
        });
      }

      const blogs = glob.sync("posts/**/*.md");

      // Filter out any invalid file paths or directories
      const validBlogs = blogs.filter((file) => {
        return file.includes("/") && file.endsWith(".md");
      });

      // Extract blog slugs from valid file paths
      const blogSlugs = validBlogs.map((file) => {
        const parts = file.split("/");
        const fileName = parts[parts.length - 1];
        return fileName.slice(0, -3); // Remove the file extension (.md)
      });

      // Add each blog to the paths object
      blogSlugs.forEach((blog) => {
        paths[`/blog/${blog}`] = { page: "/blog/[slug]", query: { slug: blog } };
      });

      return paths;
    },
  });
