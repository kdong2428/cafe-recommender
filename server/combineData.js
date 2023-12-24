const fs = require("fs");
const path = require("path");

const dataDirectory = "data";
const outputFileName = "data/cafe-all.json";

// Function to read files from a directory and create an array of JSON objects
const readFilesAndCreateArray = (directoryPath) => {
  const files = fs.readdirSync(directoryPath);

  const jsonArray = files.map((file) => {
    const filePath = path.join(directoryPath, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
  });

  return jsonArray;
};

// Function to write an array of JSON objects to a file
const writeArrayToFile = (array, fileName) => {
  const content = JSON.stringify(array, null, 2);
  fs.writeFileSync(fileName, content);
  console.log(`Data written to ${fileName}`);
};

// Main process
try {
  const jsonObjectsArray = readFilesAndCreateArray(dataDirectory);
  writeArrayToFile(jsonObjectsArray, outputFileName);
} catch (error) {
  console.error("Error:", error.message);
}
