const unionFind = (n, parent) => {
    if(parent[n] === n){
        return n;
    }
    
    return parent[n] = unionFind(parent[n], parent);
}

const solution = (n, costs) => {
    let answer = 0;
    
    const parent = Array(n).fill(0);
    
    for(let i = 0; i < n; i++){
        parent[i] = i;
    }
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(let i = 0; i < costs.length; i++){
        const start = unionFind(costs[i][0], parent);
        const end = unionFind(costs[i][1], parent);
        const cost = costs[i][2];
        
        if(start !== end){
            answer += cost;
            parent[start] = end;
        }
    }
    
    return answer;
}
