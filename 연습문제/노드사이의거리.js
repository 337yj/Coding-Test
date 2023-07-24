const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

// 트리에서는 임의의 두 노드 간의 경로가 오직 1개이다.
// 따라서 트리에서는 BFS가 아닌 DFS로도 간단히 최단 거리를 계산할 수 있다.
// 1번 노드부터 2번 노드까지의 거리: 2
// 3번 노드부터 2번 노드까지의 거리: 7

let [n, m] = input[0].split(" ").map(Number); // 노드의 개수, 쿼리의 개수
let graph = []; // 트리 정보 입력받기
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  // 노드 x와 노드 y는 서로 연결
  let [x, y, cost] = input[i].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  // 깊이 우선 탐색
  if (visited[x]) return; // 각 노드는 한 번만 방문
  visited[x] = true; // 방문 처리
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < m; i++) {
  // 각 쿼리마다 매번 dfs를 수행
  let [x, y] = input[n + i].split(" ").map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0); // 노드 x에서 출발했을 때의 모든 노드까지의 거리 계산
  console.log(distance[y]); // y까지의 최단 거리
}
