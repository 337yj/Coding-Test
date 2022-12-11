let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
 
console.log(input[0] === "" ? 0 : input.length);
