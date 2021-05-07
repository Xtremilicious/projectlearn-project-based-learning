let fs = require("fs");
let path = require("path");

function generateMD() {
  let fileName = "README";
  let fileContents = `<h1 align="center">
  <a href="https://projectlearn.io"><img src="https://i.ibb.co/YycTZq4/Screen-Shot-20200830180734-removebg-preview.png" alt="ProjectLearn"></a>
</h1>

<p align="center">
   <a href="https://github.com/Xtremilicious/projectlearn-project-based-learning/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="ProjectLearn is released under the MIT license." />
  </a>
    <a href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/Xtremilicious/ProjectLearn-Project-Based-Learning" /></a>
   <a href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning/blob/master/CONTRIBUTE.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
    <a href="https://twitter.com/intent/follow?screen_name=ProjectLearn_io">
        <img src="https://img.shields.io/twitter/follow/ProjectLearn_io?style=social&logo=twitter"
            alt="follow on Twitter"></a>
</p>

Tutorials are great, but building projects is the best way to learn. Do project based learning and learn code the right way!
  
ProjectLearn provides a curated list of project tutorials in which learners build an application from scratch. These are divided into different categories, namely, web development, mobile development, game development, machine learning, deep learning and artificial intelligence.
  
The list has project tutorials on many in-demand languages and technologies including ReactJS, NodeJS, VueJS, Flutter, React Native, .NET Core, Unity, TensorFlow, OpenCV, Keras, and more.
  
To contribute to this list, head over to [CONTRIBUTE.md](https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning/blob/master/CONTRIBUTE.md) for more details :)
  
## List of Project Tutorials:
`;

  const projectsData = require("../../data");
  const projects = projectsData[Object.keys(projectsData)[0]];
  const domains = [
    ["web-dev", "web-development", "Web Development"],
    ["mob-dev", "mobile-development", "Mobile Development"],
    ["game-dev", "game-development", "Game Development"],
    ["ml-ai", "machine-learning-and-ai", "Machine Learning & AI"],
  ];

  for (domain of domains) {
    fileContents = fileContents.concat(
      `### ${domain[2]}: \n| Project | Technologies | Link |\n| :--- |:---|:---|\n`
    );

    for (let i = 0; i < projects.length; i++) {
      slug = domain[1];
      t = domain[0];

      if (projects[i].category.includes(t)) {
        fileContents = fileContents.concat(
          `| ${projects[i].title} | ${projects[i].tech
            .slice(0, 5)
            .join(", ")} | [Link](https://projectlearn.io/learn/${slug}/project/${projects[i].title
            .toLowerCase()
            .split(" ")
            .join("-")}-${projects[i].id}?from=github)|`.concat("\n")
        );
      }
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
