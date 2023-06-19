const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((item) => item.split("").map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function BFS() {
  const queue = [[0, 0, 1]]; // [x, y, 칸 수]를 큐에 넣음
  const ch = Array.from({ length: N }, () => Array(M).fill(0)); // 방문 여부를 저장하는 배열
  ch[0][0] = 1; // 시작 지점 방문 체크

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      // 도착 지점에 도달한 경우
      return count; // 최소 칸 수 반환
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        board[nx][ny] === 1 &&
        ch[nx][ny] === 0
      ) {
        // 미로 내에 있고 이동 가능한 칸이며 방문하지 않은 경우
        ch[nx][ny] = 1; // 방문 체크
        queue.push([nx, ny, count + 1]); // 큐에 새로운 위치와 칸 수를 넣어 탐색
      }
    }
  }
}

console.log(BFS());
