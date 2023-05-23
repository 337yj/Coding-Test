function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);
    for (const [from, to] of edge){
        graph[from].push(to);
        graph[to].push(from);
    }
    const distance = Array(n + 1).fill(0).fill(1, 0, 2);
    const needVisit = [1];
    while(needVisit.length){
        const cur = needVisit.shift();
        for(const node of graph[cur]){
            if(!distance[node]){
                distance[node] = distance[cur] + 1;
                needVisit.push(node);
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter(e => e == max).length;
}
