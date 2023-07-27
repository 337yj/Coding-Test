const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

// 순서를 고려해야됨 = > 순열
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let visited = new Array(10).fill(false);
let result = [];
let maxValue = Number.MIN_SAFE_INTEGER;

function dfs(depth) {
  if (depth === n) {
    // 각 순열에 대한 처리
    let current = 0; // 공식 계산
    for (let i = 0; i < n - 1; i++)
      current += Math.abs(result[i] - result[i + 1]);
    maxValue = Math.max(maxValue, current);
  }
  for (let i = 0; i < n; i++) {
    // 각 수를 N개 선택하는 모든 순열 계산
    if (visited[i]) continue; // 이미 고른 수라면 무시하도록
    visited[i] = true; // 현재 선택한 수 방문 처리
    result.push(arr[i]);
    dfs(depth + 1); // 재귀 함수 호출
    visited[i] = false; // 현재 선택한 수 방문 처리 취소
    result.pop();
  }
}

dfs(0);
console.log(maxValue);
