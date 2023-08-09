const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m, ...arr] = input;
const busInfo = arr.map(a => a.split(" ").map(Number));
const dist = Array.from({ length: +n + 1 }, () =>
  Array.from({ length: +n + 1 }, () => Infinity)
);

busInfo.forEach(
  bus => (dist[bus[0]][bus[1]] = Math.min(bus[2], dist[bus[0]][bus[1]]))
);

for (let k = 1; k < +n + 1; k++) {
  for (let i = 1; i < +n + 1; i++) {
    for (let j = 1; j < +n + 1; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j] && i !== j) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

for (let i = 1; i < +n + 1; i++) {
  for (let j = 1; j < +n + 1; j++) {
    if (dist[i][j] === Infinity) dist[i][j] = 0;
  }
}

dist.slice(1).map(t => {
  console.log(t.slice(1).join(" "));
});
