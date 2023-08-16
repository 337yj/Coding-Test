const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let caseNum = input[0];

for (let testCase = 1; testCase <= caseNum; testCase++) {
  let testStr = input[testCase].split(" ");
  let n = parseInt(testStr[0]);
  let m = parseInt(testStr[1]);
  let count = 0;

  let visited = [];
  for (let i = 0; i < m + 1; i++) {
    let newAry = new Array(n + 1).fill(0);
    visited.push(newAry);
  }

  function combination(n, r) {
    if (n === r || r === 0) {
      return 1;
    }

    if (visited[n][r] !== 0) return visited[n][r];

    visited[n][r] = combination(n - 1, r - 1) + combination(n - 1, r);
    return visited[n][r];
  }

  console.log(combination(m, n));
}
