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

solution(input);
