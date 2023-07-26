const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

// 연결 요소의 개수를 세는 문제
// 초기에 연결 요소의 개수를 계산하고, 빨간색을 초록색으로 변경한 상태에서 다시 한번 계산
// 1. 방문하지 않은 노드를 만날 때마다 카운트하고, DFS를 호출
// DFS는 해당 위치로부터 연결된(연결요소에 포함된) 모든 노드를 방문 처리

let n = Number(input[0]); // 전체 맵의 크기(N)
let graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(""));

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        graph[x][y] === graph[nx][ny]
      ) {
        dfs(nx, ny); // 같은 색상이라면 재귀적으로 dfs() 호출
      }
    }
    // 방문처리 완료
    return true;
  }
  // 새로운 연결요소 없음
  return false;
}

// DFS를 이용해 연결 요소 세기
let result1 = 0;
let visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, 0)) result1++;
  }
}

// R -> G 변환 이후에 다시 한 번 연결 요소 세기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] == "R") graph[i][j] = "G";
  }
}

// DFS를 이용해 연결 요소 세기
let result2 = 0;
visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result2++;
  }
}

console.log(result1 + " " + result2);
