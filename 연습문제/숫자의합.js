let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[1].split('');

let sum = num.reduce((acc, v) => {
    return acc += v * 1;
}, 0);

console.log(sum);
