let answers = [1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2];

function solution(answers) {

    let answer = [];
    let supo = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    let score = [];
    for (let i = 0; i < supo.length; i++) {
        score[i] = answers.filter(
            (element, index) => element === supo[i][index % supo[i].length],
        ).length;
    }

    let max = Math.max(...score);

    if (score[0] === max) answer.push(1);
    if (score[1] === max) answer.push(2);
    if (score[2] === max) answer.push(3);

    return answer;
}

console.log(solution(answers));
