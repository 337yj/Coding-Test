let input = require('fs').readFileSync('/dev/stdin').toString().trim()//.split('\n')

function solution(input){

    if(+input <= 0){
        return 1
    }
    return +input * solution(input-1)
}

console.log(solution(input))


//----------------------------------------------------------------------------------
function solution(n) {
    function DFS(n){
        if(n===1) return 1;
        else{
            return n * DFS(n-1)
        }
    }
    let answer = DFS(n)
    
    return answer
}

console.log(solution(5));
