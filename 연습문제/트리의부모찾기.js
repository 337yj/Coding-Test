const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const n = Number(input.shift());
  // 노드의 연결 정보를 저장
  const graph = Array.from({ length: n + 1 }, () => []);
  // 각 노드의 부모를 저장할 배열
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (let [from, to] of input.map((e) => e.split(" ").map(Number))) {
    // 입력을 순회하면서 연결 정보를 그래프에 추가
    graph[from].push(to); // 노드 from과 연결된 노드 to를 graph[from]에 추가
    graph[to].push(from); // 노드 to와 연결된 노드 from을 graph[to]에 추가
  }

  const queue = [];
  queue.push(1); // 루트 노드 1을 큐에 추가
  ch[1] = 1; // 루트 노드는 1로 설정

  // BFS를 통한 부모 노드 탐색
  while (queue.length) {
    const cur = queue.shift();
    for (let next of graph[cur]) {
      // 현재 노드(cur)와 연결된 노드(next)에 대해 반복
      if (ch[next] === 0) {
        // 아직 방문하지 않은 노드라면
        ch[next] = cur; // 부모 노드의 값을 설정
        queue.push(next); // 큐에 추가하여 다음 레벨의 노드로 탐색
      }
    }
  }

  // 루트 노드를 제외한 부모 배열을 출력
  return ch.slice(2).join("\n");
};

console.log(solution(input));
