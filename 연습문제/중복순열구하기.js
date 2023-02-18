function solution(n, m) {
    let answer = [];
    let tmp = Array.from({length:m}, ()=>0);
    function DFS(L){
        if(L===m){
            answer.push(tmp.slice());
        }
        else{
            for(let i=1; i<=n; i++){
                tmp[L] = i;
                DFS(L+1);
            }
        }
    }
    DFS(0);
    return answer;
}


console.log(solution(4,3));
// 중복순열 = 4*4*4 = 64가지 경우의 수
// n만큼 가지가 뻗음
// L이 몇 중 for문을 도는지 결정 L=m
// tmp의 길이는 m
