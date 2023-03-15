function solution(tickets) {
    const answer = [];
    const goal = tickets.length + 1;
    const ch = Array.from({length: tickets.length}, _ => 0);
    
    const dfs = (path) => {
        if (path.length === goal) {
            answer.push(path)
        } else {
            for(const i in tickets) {
                if(ch[i] === 0) {
                    const [start, end] = tickets[i];
                    if (path[path.length - 1] === start) {
                        ch[i] = 1;
                        dfs([...path, end]);
                        ch[i] = 0;
                    }
                }
            }
        }
    }
    
    dfs(["ICN"]);
    
    return answer.sort()[0];
}
