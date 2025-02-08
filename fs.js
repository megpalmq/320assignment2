const fs = require("fs");
const path = require("path");

// Create and write Sanrio characters data to a JSON file
function createSanrioCharactersJson() {
  const sanrioCharacters = [
    {
      name: "Hello Kitty",
      birthday: "November 1",
      funFact: "She loves baking cookies!",
    },
    {
      name: "Cinnamoroll",
      birthday: "March 6",
      funFact: "He is a fluffy puppy who loves coffee.",
    },
    {
      name: "My Melody",
      birthday: "January 18",
      funFact: "She loves strawberry shortcake!",
    },
    {
      name: "Keroppi",
      birthday: "July 10",
      funFact: "He loves swimming and jumping.",
    },
    {
      name: "Badtz-Maru",
      birthday: "April 1",
      funFact: "He is a mischievous penguin.",
    },
  ];

  fs.writeFileSync(
    "sanrioCharacters.json",
    JSON.stringify(sanrioCharacters, null, 2)
  );
  console.log("sanrioCharacters.json has been created!");
}

// Read and log Sanrio characters data from the JSON file
function readSanrioCharactersJson() {
  const sanrioData = fs.readFileSync("sanrioCharacters.json");
  console.log("Sanrio Characters: ", JSON.parse(sanrioData.toString()));
}

// Create a 'sanrio' directory if it doesn't exist
function createSanrioDirectory() {
  const sanrioPath = path.resolve("sanrio");

  if (!fs.existsSync(sanrioPath)) {
    fs.mkdirSync(sanrioPath);
    console.log("Created 'sanrio' directory!");
  }
}

// Create an info.txt file with a fun fact about each Sanrio character
function createSanrioInfoFile() {
  const sanrioPath = path.resolve("sanrio");

  const characters = [
    "Hello Kitty: She loves baking cookies!",
    "Cinnamoroll: He is a fluffy puppy who loves coffee.",
    "My Melody: She loves strawberry shortcake!",
    "Keroppi: He loves swimming and jumping.",
    "Badtz-Maru: He is a mischievous penguin.",
  ];

  fs.writeFileSync(path.join(sanrioPath, "info.txt"), characters.join("\n"));
  console.log("Created 'info.txt' with fun facts about Sanrio characters!");
}

// Export functions to use them in other parts of your code
module.exports = {
  createSanrioCharactersJson,
  readSanrioCharactersJson,
  createSanrioDirectory,
  createSanrioInfoFile,
};
