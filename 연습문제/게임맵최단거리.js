function solution(board) {
  const n = board.length;
  const m = board[0].length;

  // 상하좌우 이동 좌표
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 방문 여부를 저장할 2차원 배열
  const visited = Array.from(Array(n), () => Array(m).fill(0));

  // BFS를 위한 큐
  const queue = [[0, 0, 1]]; // 시작 지점 (0,0)에서 출발하므로 1로 초기화

  // BFS 탐색
  while (queue.length) {
    const [x, y, cnt] = queue.shift(); // 큐의 맨 앞에서 부터 처리
    if (x === n - 1 && y === m - 1) return cnt; // (n,m)에 도착하면 거리 반환
    if (visited[x][y] === 1) continue; // 이미 방문한 지점이면 건너뜀
    visited[x][y] = 1; // 방문 여부를 표시
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m || board[nx][ny] === 0)
        continue;
      // 범위를 벗어난 경우 건너뜀
      // 벽인 경우 건너뜀
      queue.push([nx, ny, cnt + 1]); // 다음 지점을 큐에 추가하고 거리를 1 증가시킴
    }
  }

  return -1; // 도착점에 도달할 수 없는 경우
}
