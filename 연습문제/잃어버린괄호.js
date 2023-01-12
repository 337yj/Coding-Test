const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "예제.txt";

const input = fs.readFileSync(file).toString().trim().split("-");;
const N = input.length;
let answer = 0;
let sum = 0;
for (let i = 0; i < N; i++) {
  input[i] = input[i].split("+");
  for (let j = 0; j < input[i].length; j++) {
    input[i][j] = Number(input[i][j]);
    sum += input[i][j];
  }
  input[i] = sum;
  sum = 0;
}
answer += input[0];
for (let i = 1; i < N; i++) {
  answer -= input[i];
}
console.log(answer);
