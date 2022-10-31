function solution(queue1, queue2) {
    let sumQ1 = sum(queue1),
        sumQ2 = sum(queue2);
    
    let pointer1 = 0, 
        pointer2 = queue1.length;
    
    const target = (sumQ1 + sumQ2) / 2;
    const queue = [...queue1, ...queue2];
    
    const end = queue1.length * 3;
    
    for (let count = 0; count < end; count++) {
        if (sumQ1 === target) {
            return count;
        }
        
        if (sumQ1 > target) {
            sumQ1 -= queue[pointer1++];
        } else {
            sumQ1 += queue[pointer2++];
        }
    }
    
    return -1;
}

const sum = (arr) => arr.reduce((acc, v) => acc + v, 0);
