const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

// 모든 학생들은 자신이 원하는 학생과 같은 팀에 소속되고자 함
// 각 학생들의 선택을 방향 간선으로 표현해 그래프를 구성
// 한 팀에 포함된 임의의 학생 A와 B가 있을 때, A에서 B로 도달할 수 있어야 한다.
// 즉, 사이클을 구성하는 부분 그래프에 포하모딘 노드의 개수를 세는 문제
// 2
// 7
// 3 1 3 7 3 4 6
// 8
// 1 2 3 4 5 6 7 8
let testCase = Number(input[0]);
let line = 1;

while (testCase--) {
  let n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(" ").map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];

  function dfs(x, graph, visited, finished, result) {
    visited[x] = true; // 현재 노드 방문 처리
    let y = graph[x]; // 다음 노드
    if (!visited[y]) {
      // 다음 노드를 아직 방문하지 않았다면
      dfs(y, graph, visited, finished, result);
    } else if (!finished[y]) {
      while (y != x) {
        result.push(y);
        y = graph[y];
      }
      result.push(x);
    }
    finished[x] = true; // 현재 노드의 처리가 완료됨
  }

  for (let x = 1; x <= n; x++) {
    // 각 위치에서 연결 요소 계산 및 사이클 판단
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }

  line += 2; // 다음 테스트 케이스로 이동
  console.log(n - result.length);
}
