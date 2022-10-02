function solution(strings, n) {
    strings.sort((a,b)=>{
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;

        if(a > b) return 1;
        if(b > a) return -1;

        return 0;
    });
    return strings;
}


---------------------------------------------py

def solution(strings, n):
    strings.sort() 
    return sorted(strings, key=lambda x:x[n])

    
def solution(strings, n):
    return sorted(strings, key=lambda x:(x[n],x))
