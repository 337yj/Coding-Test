function solution(enter, leave) {
    var answer = [];
    for(let i = 0; i < enter.length; i++){
        answer.push(0);
    }
    
    const queue = [];
    let eIdx = 0;
    let lIdx = 0;
    while(eIdx < enter.length || lIdx < leave.length){
        const nextLeave = leave[lIdx];
        const nextEnter = enter[eIdx];
        if(queue.indexOf(nextLeave) === -1){
            queue.push(nextEnter);
            eIdx++;
        }else{
            queue.splice(queue.indexOf(nextLeave), 1);
            if(queue.length){
                answer[nextLeave-1] += queue.length;
                queue.map(p => {
                    answer[p-1]++;
                })
            }
            lIdx++;
        }
    }
    
    return answer;
}


-----------------------------------------------------------py

def solution(enter, leave):
    answer = [0] * len(enter)

    room = []
    e_idx = 0
    for l in leave:
        while l not in room:
            room.append(enter[e_idx])
            e_idx += 1
        room.remove(l)
        for p in room:
            answer[p - 1] += 1
        answer[l - 1] += len(room)

    return answer
