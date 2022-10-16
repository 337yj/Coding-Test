function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w\-\.]/g, '') 
        .replace(/\.+/g, '.') 
        .replace(/^\.|\.$/g, '') 
        .replace(/^$/, 'a') 
        .slice(0, 15).replace(/\.$/, ''); 
    const len = answer.length;
    return len > 2 ? answer : answer.padEnd(3,answer[len-1]);
}
