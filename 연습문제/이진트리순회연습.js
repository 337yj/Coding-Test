// 전위 순회
function solution(n) {
    let answer
    function DFS(n){
        if(n>7) return
        else{
            console.log(n)
            DFS(n*2)
            DFS(n*2+1)
        }
    }
    DFS(n)

   return answer
}
  
console.log(solution(1))


// 중위순회
else{
    DFS(n*2)
    console.log(n)
    DFS(n*2+1)
}

// 후위순회
else{
    DFS(n*2)
    DFS(n*2+1)
    console.log(n)
}
