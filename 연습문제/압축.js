const solution = (msg) => {
  const arr = [];

  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    arr.push(String.fromCharCode(i));
  }

  const answer = [];
  let i = 0;

  while (i < msg.length) {
    let j = 1;

    while (arr.indexOf(msg.substring(i, i + j)) !== -1 && i + j <= msg.length) {
      j++;
    }
    arr.push(msg.substring(i, i + j));
    answer.push(arr.indexOf(msg.substring(i, i + j - 1)) + 1);
    i += j - 1;
  }
  return answer;
};
