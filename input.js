const fs = require('fs')

const numbers = fs.readFileSync('input.txt', 'utf-8');

const arrayedNums = numbers.replace(/\n/g, ',').split(',').map(Number)

module.exports = arrayedNums