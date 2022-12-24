function solution(priorities, location) {
    let answer = [];
    let waitList = priorities.map((x, i) => [x, i]);
    
    while (waitList.length) {
        const front = waitList.shift();
        if (front[0] >= Math.max(...waitList.map(x => x[0]))) {
            answer.push(front[1]);
            if (front[1] === location)
                break;
        } else {
            waitList.push(front);
        }
    }
    
    return answer.indexOf(location) + 1;
}
