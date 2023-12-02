const path = require('path');
const fs = require('fs');

function getInput(fileName = 'input.txt') {
    const filePath = path.join(__dirname, fileName);
    const input = fs.readFileSync(filePath, 'utf8')
                  .toString()
                  .trim()
                  .split('\n\n');

    return input;
}

module.exports = getInput;