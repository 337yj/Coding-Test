function solution(x){
  return !(x % (x + "").split("").reduce((a, b) => +b + +a ));
}

🚨 부정연산자 ! 사용 이유
true 는 1   /    false 는 0  임

return 값이 0 이면 나누어 떨어지는 값이라 하샤드 수 임 
근데 0 은 false 잖음??  =>  !부정연산자 붙여서 1 = true 로 return 되게 하는것임~!!


-----------------------------------------------------------------------

function solution(x){
  let z = (x + "").split("").reduce((a, b) => +b + +a );  
    return  x%z == 0 ? true : false 
}

-----------------------------------------------------------------------

var n = String(x).split('').reduce((a, b) => Number(a) + Number(b));
    
    answer = x % n == 0 ? true : false;


-----------------------------------------------------------------------py
def Harshad(n):
    return n % sum([int(c) for c in str(n)]) == 0
