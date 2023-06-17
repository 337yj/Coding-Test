
const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m, v] = input[0].split(" ").map(Number);

// 그래프 생성
// 정점 번호가 1부터 시작하므로, 실제 정점의 개수보다 1이 더 큰 n+1을 사용
let graph = Array.from(Array(n + 1), () => []);

// 입력값으로 주어진 간선 정보를 이용하여 그래프 생성
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 각 정점에 연결된 정점들을 오름차순으로 정렬
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

// 방문 여부를 체크하기 위한 배열 생성
let visited = Array.from(Array(n + 1), () => 0);

// DFS를 수행한 결과를 저장할 배열
let answer_dfs = [];

// DFS 함수 구현
function DFS(v) {
  if (visited[v]) return; // 이미 방문한 정점이면 함수 종료
  visited[v] = 1; // 해당 정점 방문 체크
  answer_dfs.push(v); // 해당 정점을 방문한 결과를 저장
  for (let i = 0; i < graph[v].length; i++) {
    // 해당 정점에 연결된 정점들을 모두 탐색
    let next = graph[v][i];
    if (visited[next] === 0) {
      // 방문하지 않은 정점이라면 DFS 함수 재귀 호출
      DFS(next);
    }
  }
}

// DFS 함수 호출
DFS(v);

// DFS를 수행한 결과 출력
console.log(answer_dfs.join(" "));

// BFS를 수행한 결과를 저장할 배열
let answer_bfs = [];

// 방문 여부를 체크하기 위한 배열 초기화
visited.fill(0);

// BFS 함수 구현
function BFS(v) {
  let queue = [v]; // 큐 생성
  while (queue.length) {
    // 큐가 빌 때까지 반복
    let x = queue.shift(); // 큐에서 첫번째 요소를 꺼냄
    if (visited[x] === 1) {
      // 이미 방문한 정점이면 continue
      continue;
    }
    visited[x] = 1; // 해당 정점 방문 체크
    answer_bfs.push(x); // 해당 정점을 방문한 결과를 저장
    for (let i = 0; i < graph[x].length; i++) {
      // 해당 정점에 연결된 정점들을 모두 탐색
      let next = graph[x][i];
      if (visited[next] === 0) {
        // 방문하지 않은 정점이라면 큐에 추가
        queue.push(next);
      }
    }
  }
}

// BFS 함수 호출
BFS(v);

// BFS를 수행한 결과 출력
console.log(answer_bfs.join(" "));
