function solution(a, b) {
     var answer = 0;
     for(let i = 0; i < a.length; i++){
         answer += a[i]*b[i];
     }
     return answer;
}


------------------------------------py


def solution(a, b):
  answer = 0
  for i in range(len(a)):
    answer += a[i]*b[i]
    
   return answer
