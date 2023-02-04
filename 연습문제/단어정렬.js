const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

input.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b);
});

const set = new Set(input);

console.log(Array.from(set).join("\n"));
