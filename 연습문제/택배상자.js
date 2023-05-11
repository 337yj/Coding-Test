function solution(order) {
  let answer = 0;
  const stack = [];
  let idx = 0;

  for (let i = 1; i <= order.length; i++) {
    if (order[idx] !== i) {
      stack.push(i);
    } else {
      idx++;
      answer++;
    }

    while (stack.length !== 0 && stack.at(-1) === order[idx]) {
      stack.pop();
      idx++;
      answer++;
    }
  }

  return answer;
}
