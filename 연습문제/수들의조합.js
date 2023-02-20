function solution(n,k,arr,m){         
  let answer = 0
  let tmp = Array.from({length:k},()=>0)
  function DFS(L, s, sum){
    if(L===k){
      if(sum%m===0){
        answer++;
        // console.log(tmp)
      }
    }
    else{
      for(let i=s; i<n; i++){
        tmp[L] = arr[i]
        DFS(L+1, i+1, sum+arr[i])
      } // D(0,1) => D(1,2) => D(2,3)...
      
    }
  }
  DFS(0,0,0)
  return answer
}

const arr = [2,4,5,8,12]
console.log(solution(5,3,arr,6));
// ** 순열에선 [1, 2] [2, 1]이 다르지만 조합에선 같다
// D(0,1) => D(1,2) => /back D(2,3)/
