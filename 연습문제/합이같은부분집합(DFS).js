// 부분집합(DFS) 문제와 비슷함

function solution(arr) {
    let answer = "NO";
    let flag = 0;
    let total = arr.reduce((a,b)=>a+b,0);
    let n = arr.length;
    function DFS(L, sum){
        if(flag) return;
        if(L===n){
            if((total-sum)===sum){
                answer = "YES";
                flag = 1; // 참이 나왔을 경우 바로 끝내기
            }
        }
        else{
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }
    DFS(0,0);
    return answer;
}
  
console.log(solution([1,3,5,6,7,10]))
