// 제한 시간안에 최대 점수
function solution(m, arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    function DFS(L, score, time){
        if(time>m) return;
        if(L===n){
            answer = Math.max(answer,score);
        }
        else{
            DFS(L+1, score+arr[L][0], time+arr[L][1]);
            DFS(L+1, score, time);
        }
    }
    DFS(0,0,0);
    return answer;
}

const arr = [[10,5],[25,12],[15,8],[6,3],[7,4]];
console.log(solution(20, arr));
