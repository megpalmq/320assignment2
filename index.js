const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

function quitApp() {
  app.close();
}

function includeSillyFeature(callback) {
  app.question(
    "Would you like to add a 'Super Secret Unicorn' feature to your project? (Y/N): ",
    function (userAnswer) {
      const cleanedAnswer = userAnswer.trim().toLowerCase();

      if (cleanedAnswer === "y" || cleanedAnswer === "") {
        console.log("You've unlocked the 'Super Secret Unicorn' feature! 🦄✨");
        callback(true);
      } else if (cleanedAnswer === "n") {
        console.log("No unicorn for you! 😢");
        callback(false);
      } else {
        includeSillyFeature(callback);
      }
    }
  );
}

function includeReadmeFile(projectDirectory, callback) {
  app.question(
    "Would you like to include a README.md file? (Y/N): ",
    function (userAnswer) {
      const cleanedAnswer = userAnswer.trim().toLowerCase();

      if (cleanedAnswer === "y" || cleanedAnswer === "") {
        const readmeFile = path.join(projectDirectory, "README.md");
        const readmeContent = `# ${path.basename(
          projectDirectory
        )} : Welcome to your new project! 🎉 This is the README file for your project.`;
        fs.writeFileSync(readmeFile, readmeContent);
        console.log("Created README.md file!");
        callback(true);
      } else if (cleanedAnswer === "n") {
        console.log("Skipping README.md file...");
        callback(false);
      } else {
        includeReadmeFile(projectDirectory, callback);
      }
    }
  );
}

function askIncludeSanrioFiles(projectDirectory, callback) {
  app.question(
    "Would you like to include Sanrio files and data? (Y/N): ",
    function (answer) {
      const cleanedAnswer = answer.trim().toLowerCase();
      if (cleanedAnswer === "y" || cleanedAnswer === "") {
        console.log("Including Sanrio files and data...");
        fs.writeFileSync(
          path.join(projectDirectory, "sanrio_characters.json"),
          JSON.stringify([
            { name: "Hello Kitty", age: 3, species: "Cat" },
            { name: "My Melody", age: 2, species: "Rabbit" },
            { name: "Keroppi", age: 4, species: "Frog" },
          ])
        );
        console.log("Created sanrio_characters.json");
        fs.mkdirSync(path.join(projectDirectory, "sanrio"), {
          recursive: true,
        });
        fs.writeFileSync(
          path.join(projectDirectory, "sanrio", "info.txt"),
          "Sanrio is a Japanese company known for creating cute characters!"
        );
        console.log("Created sanrio/info.txt");
      } else if (cleanedAnswer === "n") {
        console.log("Skipping Sanrio files and data...");
      } else {
        askIncludeSanrioFiles(projectDirectory, callback);
        return;
      }
      callback();
    }
  );
}

app.question("Name of project: ", function (projectName) {
  const baseDirectory = process.cwd();
  const projectDirectory = path.join(baseDirectory, projectName);

  if (!fs.existsSync(projectDirectory)) {
    fs.mkdirSync(projectDirectory);
  }

  includeSillyFeature(function (hasUnicorn) {
    if (hasUnicorn) {
      const unicornFile = path.join(projectDirectory, "unicorn_feature.txt");
      fs.writeFileSync(
        unicornFile,
        "🎉 You've activated the Super Secret Unicorn feature! 🎉"
      );
      console.log("Created a unicorn feature file!");
    }

    includeReadmeFile(projectDirectory, function (hasReadme) {
      if (!hasReadme) {
        console.log("No README.md file was created.");
      }

      askIncludeSanrioFiles(projectDirectory, function () {
        console.log("Project setup complete!");
        quitApp();
      });
    });
  });
});
