function solution(k, dungeons) {
    let maxCount = 0;
    
    const dfs = (fatigue, count, visited) => {
        let isEnd = true;
        for (let i = 0; i < dungeons.length; i++) {
            if (visited[i] || dungeons[i][0] > fatigue) {
                continue;
            }
            isEnd = false;
            visited[i] = true;
            dfs(fatigue - dungeons[i][1], count + 1, visited);
            visited[i] = false;
        }
        if (isEnd) {
            maxCount = Math.max(maxCount, count);
        }
    };
    
    dfs(k, 0, Array(dungeons.length).fill(false));
    return maxCount;
}
