function solution(n, m){         
  let answer = [];
  let tmp = Array.from({length:m},()=>0)
  function DFS(L, s){
    if(L===m){
      answer.push(tmp.slice())
    }
    else{
      for(let i=s; i<=n; i++){
          tmp[L]=i
          DFS(L+1, i+1)
      }
    }
  }
  // 1~4까지 for문 돌아야하니 1부터 출발
  DFS(0, 1)
  return answer
}

console.log(solution(4, 2));
// 순열에선 [1, 2] [2, 1]이 다르지만 조합에선 같다
// D(0,1) => D(1,2) => /back D(2,3)/
