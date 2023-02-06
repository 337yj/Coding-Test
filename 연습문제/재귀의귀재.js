const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n')

input.shift();

let result = "";

for (let i = 0; i < input.length; i++) {
  const [isPalindrome, cnt] = dfs(input[i]);
  result += `${isPalindrome} ${cnt}\n`;
}

function dfs(s, lp = 0, rp = s.length - 1, cnt = 1) {
  if (lp >= rp) return ["1", cnt];
  if (s[lp] !== s[rp]) return ["0", cnt];
  return dfs(s, lp + 1, rp - 1, cnt + 1);
}

console.log(result);
