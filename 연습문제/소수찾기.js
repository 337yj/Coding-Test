function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}

-------------------------------------------------
  
function solution(n) {
    var arr = [];
    var cnt = 0;
    for (var i = 0; i < n + 1; i++) {
        arr.push(true);
    }

    for (var i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (var j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    arr.splice(0, 2, false, false);
    for(var i = 0; i <arr.length; i++) {
        if(arr[i]) cnt++;
    }

    return cnt++;
}
