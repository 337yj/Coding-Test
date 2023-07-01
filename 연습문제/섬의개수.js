const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let index = 0;

  // 입력의 끝을 확인, 반복문 안에서는 한 테스트 케이스를 처리
  while (true) {
    const [w, h] = input[index].split(" ").map(Number);

    if (w === 0 && h === 0) {
      // 입력의 마지막 줄인 경우 종료
      break;
    }

    // 섬과 바다 정보를 저장하는 그래프 배열 초기화
    const graph = Array.from({ length: h }, () => Array(w).fill(0));

    // 입력에서 섬과 바다 정보를 그래프 배열에 저장
    for (let i = 0; i < h; i++) {
      const row = input[index + 1 + i].split(" ").map(Number);
      graph[i] = row;
    }

    // 상, 하, 좌, 우, 대각선 방향을 나타내는 배열
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    function bfs(x, y) {
      const queue = [[x, y]];

      while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 8; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          // 그래프 범위 내에 있고, 방문하지 않은 섬인 경우
          if (nx >= 0 && nx < h && ny >= 0 && ny < w && graph[nx][ny] === 1) {
            graph[nx][ny] = 0; // 방문 처리
            queue.push([nx, ny]); // 다음 탐색을 위해 큐에 추가
          }
        }
      }
    }

    let count = 0; // 섬의 개수 카운트 변수
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (graph[i][j] === 1) {
          // 섬인 경우
          bfs(i, j); // BFS 탐색으로 섬을 탐색
          count++; // 섬 개수 증가
        }
      }
    }

    console.log(count); // 섬의 개수 출력

    index += h + 1; // 다음 테스트 케이스의 시작 인덱스로 이동
  }
}

solution(input);
