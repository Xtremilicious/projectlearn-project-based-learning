// next.config.js
const withImages = require('next-images')

module.exports = withImages({
    exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
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
          },
        "/learn/web-development/project/todoist-clone-36": {
          page: "/learn/web-development/project/[id]",
          query: { id: "todoist-clone-36" }
        }
      }
    }
  })