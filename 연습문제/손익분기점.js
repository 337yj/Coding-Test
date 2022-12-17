let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = input[0] * 1;
const B = input[1] * 1;
const C = input[2] * 1;

const margin = C - B;
const count = Math.floor(A / margin) + 1

console.log(margin <= 0 ? -1 : count);
