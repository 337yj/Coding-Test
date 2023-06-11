function solution(my_string, m, c) {
    var answer = '';

    for(let i = 0; i < my_string.length; i += m) {
        answer += my_string[i + c - 1]
    }
    return answer;
}
