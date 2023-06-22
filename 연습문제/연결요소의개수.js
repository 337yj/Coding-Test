const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);

let graph = Array.from(Array(n + 1), () => []);

let ch = Array.from({ length: n + 1 }, () => 0);

for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

function dfs(start) {
  ch[start] = 1;
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (ch[next] === 0) {
      dfs(next);
    }
  }
}

let answer = 0;
for (let i = 1; i <= n; i++) {
  if (ch[i] === 0) {
    dfs(i);
    answer++;
  }
}

console.log(answer);
