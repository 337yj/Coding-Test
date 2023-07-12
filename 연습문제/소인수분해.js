const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();

let result = [];
for (let i = 2; i <= Math.sqrt(N); i++) {
  while (N % i === 0) {
    N = N / i;
    result.push(i);
  }
}

// 소인수분해가 모두 완료된 후에 남은 N이 1이 아니라면,
// 그 값은 소인수로 처리
if (N !== 1) result.push(N);
console.log(result.join("\n"));
