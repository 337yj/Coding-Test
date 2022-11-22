function solution(n){
    var answer = 0;
  
  // n에서 %2가 가능한 경우, 그렇지 않은 경우를 구분하기
    while(n>0){
       if(n%2!==0){
           n = n-1;
           answer = answer+1;
       }else{
           n = n/2;
       }
    }
    return answer;
}
