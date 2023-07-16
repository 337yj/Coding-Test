const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 입력 중 가장 큰 수
const largestNum = Math.max(...input);
// 소수 여부를 저장하는 배열을 생성하고 초기값을 false로 설정
const check = Array.from({ length: largestNum + 1 }, () => false);

// 에라토스테네스의 체 알고리즘을 사용하여 소수 판별
for (let i = 2; i <= largestNum; i++) {
  if (!check[i]) {
    // i의 배수들을 소수가 아닌 것으로 체크
    for (let j = i ** 2; j <= largestNum; j += i) {
      check[j] = true;
    }
  }
}

let result = "";

// 각 입력값에 대해 골드바흐의 추측을 검증하고 결과를 생성
input.map((x) => {
  for (let i = 3; i < x; i += 2) {
    // i와 (x - i)가 모두 소수인 경우 골드바흐의 추측을 만족
    if (!check[i] && !check[x - i]) {
      result += `${x} = ${i} + ${x - i}\n`;
      break;
    }
  }
});

console.log(result);
