const company = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" "));
  input.shift();
  let obj = {};
  let stack = [];
  let ans = [];
  for (let i of input) obj[i[0]] = i[1][0] === "e" ? 1 : 0;
  for (let i in obj) stack.push([i, obj[i]]);
  stack
    .sort()
    .reverse()
    .forEach((n) => (n[1] ? ans.push(n[0]) : ""));
  console.log(ans.join("\n"));
};

company();
