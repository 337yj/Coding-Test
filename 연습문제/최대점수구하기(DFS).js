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

----------------------------------------------------------------
function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(L, score, time) {
    if (time > m) return;

    if (L === ps.length) {
      answer = Math.max(answer, score);
    } else {
      DFS(L + 1, score + ps[L], time + pt[L]);
      DFS(L + 1, score, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
