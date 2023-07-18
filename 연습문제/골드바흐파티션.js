const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let maxNum = Math.max(...input);

let ans = "";

let prime = Array.from({ length: maxNum + 1 }, () => true);
prime[0] = false;
prime[1] = false;

for (let i = 2; i <= maxNum / 2; i++) {
  if (prime[i]) {
    for (let j = 2; j <= maxNum / i; j++) {
      prime[i * j] = false;
    }
  }
}

input.forEach((item) => {
  let count = 0;

  for (let i = 2; i <= item / 2; i++) {
    if (prime[i] && prime[item - i]) {
      count++;
    }
  }

  ans += `${count}\n`;
});

console.log(ans);
