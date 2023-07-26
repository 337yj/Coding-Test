let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [col, row] = input.shift().split(' ').map(Number);
const board = input.map((i) => i.split(' ').map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let ans = 0;

const countingSafeZone = (arr) => {
  let cnt = 0;
  let queue = [];

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [curX + dx[i], curY + dy[i]];

      if (nx >= 0 && nx < col && ny >= 0 && ny < row && arr[nx][ny] === 0) {
        arr[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 0) {
        cnt += 1;
      }
    }
  }

  return cnt;
};

const dfs = (cnt) => {
  if (cnt === 3) {
    let arr = board.map((v) => [...v]);
    let cntOfSafe = countingSafeZone(arr);

    ans = Math.max(ans, cntOfSafe);
    return;
  }

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 0) {
        board[i][j] = 1;
        dfs(cnt + 1);
        board[i][j] = 0;
      }
    }
  }
};

dfs(0);
console.log(ans);

// ----------------------------------------------------------------------------
const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

// 벽을 3개 설치하는 모든 경우(조합)의 수를 고려해야 함
// 맵의 크기가 최대 8X8이므로, 벽을 설치할 수 있는 모든 조합의 수는 최악의 경우 64C3정도임
// 이는 100,000보다도 작은 수 이므로, 모든 경우를 고려해도 제한 시간을 초과하진 않음
// 1. DFS를 이용해 모든 조합의 수를 계산
// 2. 각 조합마다 DFS를 이용해 안전 영역의 크기를 계산
// 벽을 설치하는 각 조합에 대하여 안전영역의 크기를 계산
// 벽을 설치한 뒤에는 DFS를 수행해 바이러스가 퍼지도록 한다.
// 이후에 0으로 표시된 위치의 수를 계산한다.

let [n, m] = input[0].split(" ").map(Number);
let data = []; // 초기 맵 리스트
let temp = []; // 벽을 설치한 뒤의 맵 리스트
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  data.push(line);
  temp.push(new Array(m).fill(0));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let result = 0;

// 각 바이러스가 사방으로 퍼지도록 하기
function virus(x, y) {
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && temp[nx][ny] === 0) {
      temp[nx][ny] = 2; // 해당 위치에 바이러스 배치하고, 다시 재귀적으로 수행
      virus(nx, ny);
    }
  }
}

function getScore() {
  // 현재 맵에서 안전 영역의 크기 계산하는 메서드
  let score = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (temp[i][j] === 0) score += 1;
    }
  }
  return score;
}

// DFS를 이용해 울타리를 설치하면서, 매번 안전영역의 크기 계산
function dfs(count) {
  if (count === 3) {
    // 울타리가 3개 설치된 경우
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        temp[i][j] = data[i][j]; // 임시 배열에 데이터 기록
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (temp[i][j] === 2) virus(i, j); // 각 바이러스의 위치에서 전파 진행
      }
    }
    result = Math.max(result, getScore()); // 안전 영역의 최대값 계산
    return;
  }
  for (let i = 0; i < n; i++) {
    // 빈 공간에 울타리 설치
    for (let j = 0; j < n; j++) {
      if (data[i][j] === 0) {
        // 울타리를 3개 설치하는 모든 조합 계산
        data[i][j] = 1;
        dfs(count + 1);
        data[i][j] = 0;
      }
    }
  }
}

dfs(0);
console.log(result);
