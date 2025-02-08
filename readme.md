## sp25-create-320-hw2

A simple Node.js application that sets up a project with some fun features! It allows you to create files and directories based on user input, including a special unicorn feature and optional Sanrio files.

## Installation

To use this package, you'll need to have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository or download the files.
2. Open a terminal in the project directory.
3. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

   ! also make sure to change the gitignore file in the lib folder to be ".gitignore" instead of ".gitignore.txt"

# Usage

Once the dependencies are installed, you can run the app by executing the following command:

```bash
npm start
```

The app will prompt you for the following options:

1. Project name: Enter a name for your project directory.
2. Super Secret Unicorn feature: Decide if you'd like to add the "Super Secret Unicorn" feature (a special file will be created if you choose "Y").
3. README file: Decide if you'd like to include a README.md file.
4. Sanrio data: Decide if you'd like to include Sanrio character files and data.
   Based on your answers, the app will create the necessary files and directories in your project folder, such as:

A project directory with the name you provided.
Optionally a README.md file.
Optionally Sanrio character files and directories.
Optionally a "Super Secret Unicorn" feature file.
Example
After running npm start and answering the prompts, your project directory might look like this:

```bash
my-project/
├── README.md
├── unicorn_feature.txt (if you chose to include the unicorn)
├── sanrio/
│ ├── sanrio_characters.json
│ └── info.txt


```

### How it works:

- The user runs `npm start`, which triggers the script.
- The user is asked a series of questions (e.g., project name, include README, etc.).
- Based on their answers, files and directories are created in the project folder.
