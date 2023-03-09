function solution(priorities, location) {
    let answer = 0;
    let queue = priorities;
    let indexArr = Array.from({length: queue.length}, (v, i) => i);
    indexArr[location] = 'target'
 
    while(true) {
        if (queue[0] === Math.max(...queue)){
            answer +=1;
            if (indexArr[0] === 'target') {
                break;
            } else {
                queue.shift()
                indexArr.shift()
            }
        } else {
            queue.push(queue.shift());
            indexArr.push(indexArr.shift());
        } 
    }
    return answer;
}
