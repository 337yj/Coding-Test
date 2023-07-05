function solution(n, s, a, b, fares) {
  let path = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  );

  for (let i = 1; i <= n; i++) {
    path[i][i] = 0;
  }

  for (let i = 0; i < fares.length; i++) {
    let [from, to, value] = fares[i];
    path[from][to] = value;
    path[to][from] = value;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (path[i][k] + path[k][j] < path[i][j]) {
          path[i][j] = path[i][k] + path[k][j];
        }
      }
    }
  }

  let answer = path[s][a] + path[s][b];

  for (let i = 1; i <= n; i++) {
    let current = path[s][i] + path[i][a] + path[i][b]; 
    answer = Math.min(current, answer);
  }

  return answer;
}
