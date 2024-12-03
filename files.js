const fs = require('fs');

function readFile(path) {
    return fs.readFileSync(path, 'utf8');
}

function appendFile(path, content) {
    fs.appendFileSync(path, content);
}

function createFile(path, content) {
    fs.writeFileSync(path, content);
}

function main() {
    createFile('./README.md', "");
    appendFile('./README.md', "# Cursor AI Training\n\n");
    appendFile('./README.md', "## Tab-based coding\n\n");
}

main();

module.exports = { readFile, appendFile, createFile };
