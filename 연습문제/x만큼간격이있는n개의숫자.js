function solution(x, n) {
    var answer = [];
    for (let i = 1; i<=n; i++)
        answer.push(x*i);
    }
    return answer;
}


function solution(x, n) {
  var answer = [];
  var cnt = 0;
  while(cnt<n) {
    cnt++;
    answer.push(x*cnt);
  }
  return answer;
}


----------------------------------------py

def solution(x, n):
    return [i*x+x for i in range(n)]
