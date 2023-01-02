function solution(k, tangerine) {
    const kind = new Map();
    let answer =0 ;

    tangerine.forEach(org => {
        kind.set(org, kind.has(org) ? kind.get(org)+1 : 1);
    });

    const sortArr = [... kind].sort((a,b) => b[1] - a[1]);
    
    sortArr.forEach(arr => {
        if(k > 0) {
            k -= arr[1];    
            answer++;
        } 
    });

     return answer;
};
