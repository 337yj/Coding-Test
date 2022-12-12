const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

const [a, b] = input.map(v => [...v].reverse().join(''));

console.log(a > b ? a : b);
