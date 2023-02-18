// M개를 뽑아서 나열 ==> 순열(중복허용 X) ==> 체크배열 이용
// 3*2(앞에 값과 중복안되니 -1) = 6가지 경우의 수
// back할 때 체크 풀어줘야됨
function solution(m, arr) {
    let answer = "";
    let n = arr.length;
    let ch = Array.from({length:n},()=>0);
    let tmp = Array.from({length:m},()=>0);
    let cnt = 0;
    function DFS(L){
        // if()
        if(L===m){
            answer += `${tmp[[0]]} ${tmp[1]}\n`
            cnt++;
        }
        else{
            for(let i=0; i<n; i++){
                if(ch[i]===0){
                    ch[i]=1;
                    tmp[L] = arr[i];
                    DFS(L+1);
                    ch[i]=0;
                }
            }
        }
    }
    DFS(0);
    return answer+cnt;
}

console.log(solution(2,[3,6,9]));

