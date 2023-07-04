function solution(n, t, m, timetable) {
    const getTime = time => time.substr(0, 2) * 60 + +time.substr(3);

    let answer = getTime('09:00'),
        last = (n - 1) * t + answer,
        crews = timetable.map(getTime).sort((a, b) => a - b).filter(v => v <= last);

    for (let i = 0; i < n; i++) {
        let crewsNum = crews.filter(crew => answer >= crew).length;

        if (i === n - 1) {
            if (crewsNum >= m) answer = crews[m - 1] - 1;
        } else {
            crews.splice(0, crewsNum > m ? m : crewsNum);

            answer += t;
        }
    }

    return String(Math.floor(answer / 60)).padStart(2, '0') + ':' + String(answer % 60).padStart(2, '0');
}
