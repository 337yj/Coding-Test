let input = require("fs").readFileSync("예제.txt").toString().split("\n").map(Number);

let arr = [];

for (let i = 1; i <= 30; i++) {
  if (input.indexOf(i) === -1) arr.push(i);
  if (arr.length >= 2) break;
}

console.log(arr.join("\n"));
