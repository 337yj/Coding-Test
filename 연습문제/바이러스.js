const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift(); // 컴퓨터의 수
const M = +input.shift(); // 네트워크 상에서 연결되어 있는 컴퓨터 쌍의 수

const graph = Array.from(Array(N + 1), () => []); // 인접 리스트로 그래프 표현
const ch = Array.from(Array(N + 1), () => 0); // 방문 여부를 체크하기 위한 배열
ch[1] = 1; // 1번 컴퓨터는 웜 바이러스에 걸렸음을 표시
let count = 0; // 웜 바이러스에 걸리게 되는 컴퓨터의 수를 세는 변수

for (let i = 0; i < M; i++) {
  const [first, second] = input[i].split(" ").map(Number);
  graph[first].push(second); // 양방향으로 연결된 간선을 그래프에 추가
  graph[second].push(first);
}

const dfs = (start) => {
  for (let i of graph[start]) {
    // start와 연결된 정점들을 순회
    if (ch[i] === 0) {
      // 아직 방문하지 않은 정점일 경우
      ch[i] = 1; // 방문 처리
      count++; // 웜 바이러스에 걸리게 되는 컴퓨터 수 증가
      dfs(i); // 해당 정점으로 DFS 호출
    }
  }
};

dfs(1); // 1번 컴퓨터를 시작으로 DFS 수행

console.log(count); // 웜 바이러스에 걸리게 되는 컴퓨터 수 출력
