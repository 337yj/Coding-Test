function solution(board){         
  let answer = "";
  let queue = [];
  queue.push(1);
  // queue.length = 0이면 끝
  while(queue.length){
    // queue에서 앞에 노드 하나 꺼내기 => 방문했다는거
    let v = queue.shift();
    answer += v + " ";
    // 두가닥 만들어야하니 1 => 2, 3
    // v*2, v*2+1 각각 nv에 대응
    for(let nv of [v*2, v*2+1]){
      if(nv>7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());  // 1 2 3 4 5 6 7
