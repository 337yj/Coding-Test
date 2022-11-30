let input=require('fs').readFileSync('dev/stdin').toString().split('\n');

const target = input[0].split(" ")[1];
const cnt = input[1].split(" ").filter((ele) => +ele < +target);

console.log(...cnt);
