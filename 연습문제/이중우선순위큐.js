function solution(operations) {
    var answer = [];
    
    operations.map(e => {
        let num = 0;
        if(e.startsWith('I')) return answer.push(e.split(' ')[1] * 1);

        if (!answer.length) {
            return;
        };
        
        if (e.startsWith('D -')) {
            num = Math.min(...answer);
            console.log(num);
            answer.splice(answer.indexOf(num), 1);
        } else {
            num = Math.max(...answer);
            answer.splice(answer.indexOf(num), 1);
        }
    })
    
    if (!answer.length) {
        return [0, 0];
    }
    return [Math.max(...answer), Math.min(...answer)];
}
