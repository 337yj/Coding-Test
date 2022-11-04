function solution(line) {
  let answer = [];
  let list = [];
  for (let i = 0; i < line.length; i++) {
    // 1. 정수인 겹치는 별점 찾기
    for (let j = i + 1; j < line.length; j++) {
      if (line[i][0] * line[j][1] - line[i][1] * line[j][0] === 0) continue;
      let x =
        (line[i][1] * line[j][2] - line[i][2] * line[j][1]) /
        (line[i][0] * line[j][1] - line[i][1] * line[j][0]);
      let y =
        (line[i][2] * line[j][0] - line[i][0] * line[j][2]) /
        (line[i][0] * line[j][1] - line[i][1] * line[j][0]);
      if (Number.isInteger(x) && Number.isInteger(y)) {
        list.push([x, y]);
      }
    }
  }

  let minX = list[0][0];
  let maxX = list[0][0];
  let minY = list[0][1];
  let maxY = list[0][1];

  for (const p of list) {
    // 2. 넓이를 구하기 위한 최대 최솟값 구하기
    minX = Math.min(minX, p[0]);
    maxX = Math.max(maxX, p[0]);
    minY = Math.min(minY, p[1]);
    maxY = Math.max(maxY, p[1]);
  }

  // 3. 넓이에 별과 점
  answer = Array.from(Array(maxY - minY + 1), () =>
    Array(maxX - minX + 1).fill(".")
  );

  for (const p of list) {
    answer[maxY - p[1]][p[0] - minX] = "*"; // x좌표는 minX 를 빼주면 되고 y좌표는 maxY 에서 빼면 됨
  }

  return answer.map((el) => el.join(""));
}
