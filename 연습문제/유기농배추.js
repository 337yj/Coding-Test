const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const dx = [-1, 1, 0, 0]; // 상하좌우 이동에 사용할 변위
  const dy = [0, 0, -1, 1];

  const T = Number(input.shift()); // 테스트케이스 개수

  for (let t = 0; t < T; t++) {
    // 가로길이, 세로길이, 배추 위치 개수
    const [M, N, K] = input.shift().split(" ").map(Number);
    const graph = Array.from({ length: M }, () => Array(N).fill(0)); // 배추 밭 초기화

    // 배추의 위치 정보를 입력받아 배추 밭에 표시
    for (let i = 0; i < K; i++) {
      const [x, y] = input.shift().split(" ").map(Number);
      graph[x][y] = 1;
    }

    let count = 0; // 필요한 배추흰지렁이 수

    function bfs(startX, startY) {
      const queue = [[startX, startY]];
      // graph[startX][startY] = 0; // 방문 처리

      while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          // 범위를 벗어나지 않고, 배추가 심어져 있으면
          if (nx >= 0 && nx < M && ny >= 0 && ny < N && graph[nx][ny] === 1) {
            graph[nx][ny] = 0; // 해당 배추를 방문 처리
            queue.push([nx, ny]); // 큐에 인접 배추 위치 추가
          }
        }
      }
    }

    // 배추 밭을 탐색하면서 배추흰지렁이가 필요한 영역을 찾음
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) {
          // 배추가 심어져 있는 경우
          bfs(i, j); // 해당 배추와 인접한 배추들을 방문 처리
          count++; // 배추흰지렁이 수 증가
        }
      }
    }

    console.log(count); // 필요한 배추흰지렁이 수 출력
  }
}



// ---------------------------------------------------------------------
const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

function dfs(graph, n, m, x, y) { // 깊이 우선 탐색
  // 주어진 범위를 벗어나는 경우 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  // 현재 노드를 아직 처리하지 않았다면
  if (graph[x][y] === 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1;
    // 상 하 좌 우 위치들도 모두 재귀적으로 호출
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}

// 테스트 케이스 수
let testCases = Number(input[0]);
let line = 1;

while (testCases--) {
  // 가로,세로,배추가 심어져 있는 위치의 개수
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }
  let answer = 0; // 연결 요소의 수
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++; // 현재 위치에서 DFS 수행
    }
  }
  line += k + 1; // 다음 테스트 케이스
  console.log(answer);
}


solution(input);
