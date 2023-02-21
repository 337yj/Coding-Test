function solution(n, arr){         
  let answer = 0;
  // idx 1부터 시작이니까 n+1
  let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0));
  let ch = Array.from({length:n+1}, ()=>0);
  let tmp = [];
  for(let [a,b] of arr){
    // a에서 b로 이동
    graph[a][b] = 1;
  }
  // v: vertex, 꼭지점
  function DFS(v){
    // 5에 도달했을 시에 종착점이니 answer++
    if(v === n){
      answer++;
      console.log(tmp)
    } 
    else{
      for(let i=1; i<=n; i++){
        // v에서 i로 갈 수 있느냐, 방문한적 있느냐 확인
        if(graph[v][i]===1 && ch[i]===0){
          ch[i] = 1;
          tmp.push(i)
          DFS(i);
          ch[i] = 0; 
          tmp.pop(i)
        }
      }
    }
  }
  tmp.push(1)
  ch[1]=1;
  DFS(1);
  return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));
