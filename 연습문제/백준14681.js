// fs.readFileSync('/dev/stdin') -> 런타임에러 발생 -> readFileSync(0)

let [x,y] = require('fs').readFileSync(0).toString().split('\n').map(Number)

if(x > 0) y > 0 ? console.log(1) : console.log(4)
if(x < 0) y > 0 ? console.log(2) : console.log(3)

//----------------------------------------------------------------------------------------------
// 해당 경로 접근 권한문제로 readline 모듈로 작성하면 런타임에러 발생 안함

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
let input = [];
let quadrantVal;
 
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];
 
	if(x > 0) y > 0 ? console.log(1) : console.log(4)
	if(x < 0) y > 0 ? console.log(2) : console.log(3)
 
  process.exit();
});
