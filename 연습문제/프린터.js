function solution(priorities, location) {
    const documents = Array.from({ length: priorities.length }, (_, i) => i);
    let cnt = 0;
    while (priorities.length) {
        const priority = priorities.shift();
        const document = documents.shift();
        const max = Math.max(...priorities);
        if (max > priority) {
            priorities.push(priority);
            documents.push(document);
        } else {
            cnt++;
            if (document === location) return cnt;
        }
    }
}
