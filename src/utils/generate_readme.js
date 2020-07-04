let fs = require("fs");
let path = require("path");

function generateMD() {
  let fileName = "README";
  let fileContents = `# :beginner:[ProjectLearn](https://projectlearn.io) - Project Based Learning

Website: https://projectlearn.io

Tutorials are great, but building projects is the best way to learn. Do project based learning and learn code the right way!
  
ProjectLearn provides a curated list of project tutorials in which learners build an application from scratch. These are divided into different categories, namely, web development, mobile development, game development, machine learning, deep learning and artificial intelligence.
  
The list has project tutorials on many in-demand languages and technologies including ReactJS, NodeJS, VueJS, Flutter, React Native, .NET Core, Unity, TensorFlow, OpenCV, Keras, and more.
  
To contribute to this list, head over to [CONTRIBUTE.md](https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning/blob/master/CONTRIBUTE.md) for more details :)
  
## List of Project Tutorials:
`;

  const projectsData = require("../../data");
  const projects = projectsData[Object.keys(projectsData)[0]];

  fileContents = fileContents.concat(`
### Web Development: \n
| Project | Technologies | Link |
| :--- |:---|:---|
`);

  for (let i = 0; i < projects.length; i++) {
    slug = "web-development";
    t = "web-dev";

    if (projects[i].category.includes(t)) {
      fileContents = fileContents.concat(
        `| ${projects[i].title} | ${projects[i].tech.join(
          ", "
        )} | [Link](https://projectlearn.io/learn/${slug}/project/${projects[i].title
          .toLowerCase()
          .split(" ")
          .join("-")}-${projects[i].id}?from=github)|`.concat("\n")
      );
    }
  }

  fileContents = fileContents.concat(`
### Mobile Development: \n
`);

  for (let i = 0; i < projects.length; i++) {
    let flag = 0;
    if (
      projects[i].title.toLowerCase()[0] === "a" ||
      projects[i].title.toLowerCase()[0] === "e" ||
      projects[i].title.toLowerCase()[0] === "i" ||
      projects[i].title.toLowerCase()[0] === "o" ||
      projects[i].title.toLowerCase()[0] === "u"
    ) {
      flag = 1;
    }

    slug = "mobile-development";
    t = "mob-dev";

    if (projects[i].category.includes(t)) {
      flag === 1
        ? (fileContents = fileContents.concat(
            `- [Build an ${projects[i].title} (${projects[i].tech
              .slice(0, 3)
              .join(", ")})](https://projectlearn.io/learn/${slug}/project/${projects[i].title
              .toLowerCase()
              .split(" ")
              .join("-")}-${projects[i].id}?from=github)`.concat("\n")
          ))
        : (fileContents = fileContents.concat(
            `- [Build a ${projects[i].title} (${projects[i].tech
              .slice(0, 3)
              .join(", ")})](https://projectlearn.io/learn/${slug}/project/${projects[i].title
              .toLowerCase()
              .split(" ")
              .join("-")}-${projects[i].id}?from=github)`.concat("\n")
          ));
    }
  }

  fileContents = fileContents.concat(`
### Game Development: \n
`);

  for (let i = 0; i < projects.length; i++) {
    let flag = 0;
    if (
      projects[i].title.toLowerCase()[0] === "a" ||
      projects[i].title.toLowerCase()[0] === "e" ||
      projects[i].title.toLowerCase()[0] === "i" ||
      projects[i].title.toLowerCase()[0] === "o" ||
      projects[i].title.toLowerCase()[0] === "u"
    ) {
      flag = 1;
    }

    slug = "game-development";
    t = "game-dev";

    if (projects[i].category.includes(t)) {
      flag === 1
        ? (fileContents = fileContents.concat(
            `- [Build an ${projects[i].title} (${projects[i].tech
              .slice(0, 3)
              .join(", ")})](https://projectlearn.io/learn/${slug}/project/${projects[i].title
              .toLowerCase()
              .split(" ")
              .join("-")}-${projects[i].id}?from=github)`.concat("\n")
          ))
        : (fileContents = fileContents.concat(
            `- [Build a ${projects[i].title} (${projects[i].tech
              .slice(0, 3)
              .join(", ")})](https://projectlearn.io/learn/${slug}/project/${projects[i].title
              .toLowerCase()
              .split(" ")
              .join("-")}-${projects[i].id}?from=github)`.concat("\n")
          ));
    }
  }

  fileContents = fileContents.concat(`
### Machine Learning & AI: \n
`);

  for (let i = 0; i < projects.length; i++) {
    let flag = 0;
    if (
      projects[i].title.toLowerCase()[0] === "a" ||
      projects[i].title.toLowerCase()[0] === "e" ||
      projects[i].title.toLowerCase()[0] === "i" ||
      projects[i].title.toLowerCase()[0] === "o" ||
      projects[i].title.toLowerCase()[0] === "u"
    ) {
      flag = 1;
    }

    slug = "machine-learning-and-ai";
    t = "ml-ai";

    if (projects[i].category.includes(t)) {
      flag === 1
        ? (fileContents = fileContents.concat(
            `- [Build an ${projects[i].title} (${projects[i].tech
              .slice(0, 3)
              .join(", ")})](https://projectlearn.io/learn/${slug}/project/${projects[i].title
              .toLowerCase()
              .split(" ")
              .join("-")}-${projects[i].id}?from=github)`.concat("\n")
          ))
        : (fileContents = fileContents.concat(
            `- [Build a ${projects[i].title} (${projects[i].tech
              .slice(0, 3)
              .join(", ")})](https://projectlearn.io/learn/${slug}/project/${projects[i].title
              .toLowerCase()
              .split(" ")
              .join("-")}-${projects[i].id}?from=github)`.concat("\n")
          ));
    }
  }

  fileContents = fileContents.concat(`<p align="center">
  <img src="https://i.ibb.co/ypzR4Qv/Screen-Shot-20200320134822.png">
</p>`);

  let outputPath = path.join(__dirname, "../../", `${fileName}.md`);

  fs.writeFile(outputPath, fileContents, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(outputPath + " file generated");
  });
}

generateMD();
