const getInput = require('./input');

const TENS_PLACE_MULTIPLIER = 10;
const DEBUG = false;

function debugLog(message, isEnabled) {
    if (isEnabled) {
        console.log(message);
    }
}

const numberWordsMap = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
};

function processLine(line) {
    let numbersFound = [];
    let i = 0;

    while (i < line.length) {
        let foundNumber = false;

        for (const [word, number] of Object.entries(numberWordsMap)) {
            if (line.substr(i, word.length).toLowerCase() === word) {
                numbersFound.push(number);
                foundNumber = true;
                break;
            }
        }

        if (!foundNumber) {
            const digitMatch = line.substr(i, 1).match(/\d/);
            if (digitMatch) {
                numbersFound.push(parseInt(digitMatch[0]));
            }
        }

        i++;
    }

    return numbersFound;
}

function calculateSum(numbers) {
    return numbers.length === 0 ? 0
                               : numbers[0] * TENS_PLACE_MULTIPLIER + numbers[numbers.length - 1];
}

const input = getInput();
const lines = input[0].split('\n');
debugLog(lines, DEBUG);

const processedLines = lines.map(processLine);
debugLog(processedLines, DEBUG);

const sums = processedLines.map(calculateSum);
debugLog(sums, DEBUG);

const totalSummation = sums.reduce((acc, curr) => acc + curr, 0);
console.log(totalSummation);
