function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) { // 나머지를 이용해 소숫점 판별, 제곱근이 아닐 경우
        answer = -1;
    } else {
        answer = Math.pow(sqrt+1,2); // 제곱근일 경우 2승
    }
    return answer
}


---------------------------------------------------------------------------

  
function solution(n) {
    return Math.sqrt(n) % 1 == 0 ? Math.pow(Math.sqrt(n)+1,2) : -1
}



🔎 파이썬 풀이
---------------------------------------------------------------------------
  
  
def solution(n):
    sqrt = n**(1/2)
    
    if sqrt % 1 == 0:
        return (sqrt+1)**2
    else: return -1
    
    
---------------------------------------------------------------------------
    
    
def solution(n):
    if n % math.sqrt(n) == 0:
        return math.pow(math.sqrt(n)+1,2)
    return -1
    
    
---------------------------------------------------------------------------
    
    
def solution(n):
    answer = 0
    num = n ** 0.5

    if num == int(num):   # 정수형이 나오면 제곱근인것임
        answer = (num+1) ** 2
    else:
        answer = -1

    return answer
  
  
  
  
