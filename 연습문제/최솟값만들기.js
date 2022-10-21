function solution(A,B){
    var answer = 0;
    // 오름차순
    A.sort((a,b)=>a-b);
    //내림차순
    B.sort((a,b)=>b-a);
    // 같은 인덱스의 값 끼리 곱하고 이전 값과 더하여 누적
    answer = A.reduce((acc,n,idx)=>{
        return acc += n*B[idx];
    },0);
    return answer;
}
