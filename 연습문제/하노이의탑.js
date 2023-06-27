function solution(n) {
  const answer = [];
  const hanoi = (n, from, to, by) => {
    if (n === 1) {
      answer.push([from, to]);
      return;
    }
    hanoi(n - 1, from, by, to);
    answer.push([from, to]);
    hanoi(n - 1, by, to, from);
  };
  hanoi(n, 1, 3, 2);
  return answer;
}
