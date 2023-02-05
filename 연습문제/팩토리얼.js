let input = require('fs').readFileSync('/dev/stdin').toString().trim()//.split('\n')

function solution(input){

    if(+input <= 0){
        return 1
    }
    return +input * solution(input-1)
}

console.log(solution(input))
