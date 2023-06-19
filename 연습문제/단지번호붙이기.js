const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input.shift());
const board = input.map((item) => item.split("").map(Number));

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let queue = [];
// 총 단지 수
let total = 0;
// 각 단지 내의 집의 수를 저장할 배열
let houseCounts = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      // 집이 있는 위치를 찾았을 때
      board[i][j] = 0; // 방문 체크를 위해 값을 0으로 변경
      queue.push([i, j]); // BFS를 위해 큐에 좌표를 넣음

      let count = 0; // 현재 단지의 집의 수를 저장하는 변수

      while (queue.length) {
        // BFS 탐색 시작
        let x = queue.shift();
        count++; // 집의 수 증가

        for (let k = 0; k < 4; k++) {
          // 상하좌우 네 방향에 대해 탐색
          let nx = x[0] + dx[k];
          let ny = x[1] + dy[k];

          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
            // 지도 범위 내에 있고, 방문하지 않은 집인 경우
            board[nx][ny] = 0; // 방문 체크를 위해 값을 0으로 변경
            queue.push([nx, ny]); // 큐에 좌표를 넣어 탐색을 진행
          }
        }
      }

      houseCounts.push(count); // 현재 단지의 집의 수를 저장
      total++; // 총 단지 수 증가
    }
  }
}

let sortCounts = houseCounts.sort((a, b) => a - b).join("\n");
console.log(total + "\n" + sortCounts);
