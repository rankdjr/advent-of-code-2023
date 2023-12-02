const getInput = require('./input');

const DEBUG = false;
const TENS_PLACE_MULTIPLIER = 10;

function debugLog(message) {
    if (DEBUG) {
        console.log(message);
    }
}

function extractNumbers(line) {
    const matches = line.match(/\d/g);
    return matches ? matches.map(Number) : [];
}

function calculateSum(numbers) {
    return numbers.length === 0 ? 0
        : numbers[0] * TENS_PLACE_MULTIPLIER + numbers[numbers.length - 1];
}

const input = getInput();
const lines = input[0].split('\n');
debugLog(lines.map((line, index) => `Line ${index + 1}: ${line}`).join('\n'));

const numbers = lines.map(extractNumbers);
debugLog(numbers);

const sums = numbers.map(calculateSum);
debugLog(sums);

const totalSummation = sums.reduce((acc, curr) => acc + curr, 0);
console.log(totalSummation);
