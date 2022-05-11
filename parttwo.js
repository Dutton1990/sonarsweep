const arrayedNums = require('./input')

// let count = 0
// for(let i = 0; i < arrayedNums.length; i++){
//     let windowA = arrayedNums[i] + arrayedNums[i + 1] + arrayedNums[i + 2]
//     let windowB = arrayedNums[i + 1] + arrayedNums[i + 2] + arrayedNums[i + 3]

//     if (windowB > windowA){
//         count++
//     }
// }

// console.log(count)
// 1706

let count = 0

for(let i = 0; i < arrayedNums.length; i++){
    let windowASum = arrayedNums.slice(i, i + 3).reduce((a,b) => a + b, 0)
    let windowBSum = arrayedNums.slice(i + 1, i + 4).reduce((a,b) => a + b, 0)

    if (windowBSum > windowASum){
        count++
    }
}

console.log(count)