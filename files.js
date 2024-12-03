const fs = require('fs');

function readFile(path) {
    return fs.readFileSync(path, 'utf8');
}

function appendFile(path, content) {
    fs.appendFileSync(path, content);
}

function main() {
    appendFile('./README.md', "## Tab-based coding\n\n");
}

main();

module.exports = { readFile, appendFile };
