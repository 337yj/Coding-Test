const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const board = input.slice(1).map((row) => row.split(" ").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const DFS = (x, y, height, ch) => {
  dx.forEach((dx, i) => {
    const nx = x + dx;
    const ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !ch[nx][ny] &&
      board[nx][ny] > height
    ) {
      ch[nx][ny] = 1;
      DFS(nx, ny, height, ch);
    }
  });
};

let maxCount = 0;
for (let height = 0; height <= 100; height++) {
  let count = 0;
  const ch = Array.from({ length: N }, () => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!ch[i][j] && board[i][j] > height) {
        ch[i][j] = 1;
        DFS(i, j, height, ch);
        count++;
      }
    }
  }
  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);
