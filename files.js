const fs = require('fs');

function readFile(path) {
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (error) {
        throw new Error(`Failed to read file at path ${path}: ${error.message}`);
    }
}

function appendFile(path, text) {
    fs.appendFileSync(path, text);
}

function createFile(path, text) {
    fs.writeFileSync(path, text);
}

function main() {
    try {
        readFile('nonexistent.txt');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();

module.exports = { readFile, appendFile, createFile };
