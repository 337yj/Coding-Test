function solution(n) {
    var answer = 0

    for(let i =1;i<=n;i++){
        if (checksum(i,0,n)) answer += 1;
    }
    return answer;
}

function checksum(cur,sum,n){
    if (sum===n) return true;
    if (sum > n ) return false;
    return checksum(cur +1,sum+cur,n);
}
