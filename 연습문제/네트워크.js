function solution(n, computers) {
  var answer = 0;
  // 방문 여부를 체크하기 위한 배열 생성
  let ch = Array.from({ length: n }, () => 0);

  function DFS(L) {
    // 현재 노드를 방문했다고 체크
    ch[L] = 1;

    // 현재 노드와 연결된 노드를 순회하며 방문
    for (let i = 0; i < n; i++) {
      if (computers[L][i] === 1 && ch[i] === 0) {
        DFS(i);
      }
    }
  }

  // 모든 노드를 순회하며 DFS 함수를 호출하여 네트워크를 찾음
  for (let i = 0; i < n; i++) {
    // 방문하지 않은 노드일 때, DFS 함수 호출 후 answer 증가
    if (ch[i] === 0) {
      DFS(i);
      answer++;
    }
  }

  return answer;
}
