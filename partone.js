const arrayedNums = require('./input')

let count = 0
for (let i = 1; i < arrayedNums.length; i++){
    if (arrayedNums[i] > arrayedNums[i - 1]){
        count++
    }
}

console.log(count)