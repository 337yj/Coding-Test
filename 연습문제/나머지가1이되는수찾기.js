function solution(n) {
    for(let i =2; i<n; i++) {
        if(n % i ===1){
            return i
        }
    }
}


-------------------------------------py


def solution(n):
    for i in range(1,n):
        if n%i==1:
            return i
