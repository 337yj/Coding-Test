function solution(phone_number) {
    const len = phone_number.length - 4;
    return "*".repeat(len) + phone_number.slice(-4);
    // 뒤 4자리를 기준으로 앞의 번호들을 repeat()를 사용해 *처리해주고, slice()를 사용해 뒤의 4자리만 불러온다.
}


----------------------------------------------------

function solution(phone_number) {
    const len = phone_number.length - 4;
    return "*".repeat(len) + phone_number.substring(len);
    // 뒤 4자리를 기준으로 앞의 번호들을 repeat를 사용해 *처리해주고, substring은 인덱스 값을 사용해 시작점을 정해줄 수 있다.
}
