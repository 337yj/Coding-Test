function solution(x){
  return !(x % (x + "").split("").reduce((a, b) => +b + +a ));
}

π¨ λΆμ μ°μ°μ ! μ¬μ© μ΄μ 
true λ 1   /    false λ 0  μ

return κ°μ΄ 0 μ΄λ©΄ λλμ΄ λ¨μ΄μ§λ κ°μ΄λΌ νμ€λ μ μ 
κ·Όλ° 0 μ false μμ??  =>  !λΆμ μ°μ°μ λΆμ¬μ 1 = true λ‘ return λκ² νλκ²μ~!!


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
