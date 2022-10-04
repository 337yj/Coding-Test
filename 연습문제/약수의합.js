function solution(n) {
    var answer = [];
    for(let i = 0; i <=n ; i++){
        if(n%i ===0){
           answer.push(i);
        }
    }
    var sum = answer.reduce((a,b)=> a + b,0);
    return sum;
}
