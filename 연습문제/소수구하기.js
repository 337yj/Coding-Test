const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(v => Number(v));

// 소수 여부를 저장하기 위한 객체 초기화
// 초기에 1은 소수가 아닌 것으로 설정
const prime = { 1: true };

// 에라토스테네스의 체 알고리즘을 사용하여 소수 판별
for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
  if (prime[i]) {
    // 이미 체크된 수의 배수는 넘어감
    continue;
  }

  // i의 배수들을 소수가 아닌 것으로 체크
  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}

const results = [];

// n부터 m까지의 수를 확인하면서 소수인 경우 결과 배열에 추가
// prime[i]가 false인 경우, 해당 수는 소수
for (let i = n; i <= m; i++) {
  if (!prime[i]) {
    results.push(i);
  }
}

console.log(results.join("\n"));
