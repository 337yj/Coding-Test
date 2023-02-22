// 
function solution(n, arr){         
  let answer = 0;
  // idx 1부터 시작이니까 n+1
  let graph = Array.from(Array(n+1), ()=>Array());
  let ch = Array.from({length:n+1}, ()=>0);
  let tmp = [];
  // 인접리스트
  for(let [a,b] of arr){
    graph[a].push(b);
  }
  // console.log(graph)
  // [ [], [ 2, 3, 4 ], [ 1, 3, 5 ], [ 4 ], [ 2, 5 ], [] ]
  // 1정점에서 2, 3, 4정점으로 갈 수 있다. ---

  function DFS(v){
    // 5에 도달했을 시에 종착점이니 answer++
    if(v === n){
      answer++;
      console.log(tmp)
    } 
    else{
      for(let i=0; i<=graph[v].length; i++){
        // 어차피 갈수있는 정점만 넣어놓았으니 방문한적 있느냐만 확인
        // i가 0일 땐 2, 1일땐 3, 3일땐 4, 정점번호고 체크되어 있냐
        if(ch[graph[v][i]]===0){
          ch[graph[v][i]] = 1;
          tmp.push(graph[v][i])
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0; 
          tmp.pop(graph[v][i])
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
