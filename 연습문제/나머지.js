let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let result = [];

for (i = 0; i < input.length; i++) {
  if (!result.includes(input[i] % 42)) {
    result.push(input[i] % 42);
  }
}

console.log(result.length);
