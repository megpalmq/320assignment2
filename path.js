const fs = require("fs");
const path = require("path");

// Your functions should use the 'fs' module
function createSanrioCharactersJson() {
  const sanrioData = [
    { name: "Hello Kitty", type: "cat" },
    { name: "My Melody", type: "rabbit" },
  ];
  fs.writeFileSync(
    "sanrio_characters.json",
    JSON.stringify(sanrioData, null, 2)
  );
  console.log("Created Sanrio characters JSON file.");
}

function createSanrioDirectory() {
  const sanrioDir = path.join(process.cwd(), "sanrio");
  if (!fs.existsSync(sanrioDir)) {
    fs.mkdirSync(sanrioDir);
    console.log("Created Sanrio directory.");
  }
}

function createSanrioInfoFile() {
  const infoFile = path.join(process.cwd(), "sanrio", "info.txt");
  const infoContent = "This is a file for Sanrio characters!";
  fs.writeFileSync(infoFile, infoContent);
  console.log("Created Sanrio info file.");
}

function readSanrioCharactersJson() {
  const sanrioData = fs.readFileSync("sanrio_characters.json", "utf-8");
  console.log("Sanrio Data:", JSON.parse(sanrioData));
}

module.exports = {
  createSanrioCharactersJson,
  createSanrioDirectory,
  createSanrioInfoFile,
  readSanrioCharactersJson,
};
