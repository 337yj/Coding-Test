function solution(s) {
  let zeroCount = 0;
  let transformCount = 0;
  while (s > 1) {
    let temp = s.length;
    s = s.replace(/0/g, "");
    zeroCount += temp - s.length;
    s = s.length.toString(2);
    transformCount++;
  }
  return [transformCount, zeroCount];
}
