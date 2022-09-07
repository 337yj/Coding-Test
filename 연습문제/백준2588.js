// 솔루션 1
// 문제 접근: 각 자릿수를 나누기의 몫과 나머지로 얻는다.

const fs=require('fs');
const [num1, num2]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const oneNum=num2%10;  // 385/10 = 5
const tenNum=Math.floor((num2%100)/10); // 385/100 = 3.85 =>나머지 85/10 => 8.5=> 소수탈락 8
const hundredNum=Math.floor(num2/100); // 385/100 = 3.85 => 소수탈락 3

console.log(num1*oneNum);
console.log(num1*tenNum);
console.log(num1*hundredNum);
console.log(num1*num2);

//--------------------------------------------------------------

// 솔루션 2
// 문제 접근: 각 자릿수를 array.split('')로 분리해 구한다.

const fs=require('fs');
const [num1,num2]=fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num=parseInt(num1);
const multipleNum=num2.split('').map(Number);
let result=multipleNum.reverse().map(x=>x*num); // 뒷숫자부터 곱해줘야하니까

result.push(num*parseInt(num2));
console.log(result.join('\n'));


//--------------------------------------------------------------

// 솔루션 3
// temp1, temp2, temp3의 값에, 3, 4, 5번을 구해주고, 6번의 값은 4번에서는 뒤에 0을 붙이고
// 5번에서는 0을 두번 붙이고 전체 값을 더해주면 최종 결과값을 구할수 있음

const fs = require('fs');
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [B0, B1, B2] = B.split('');

const temp1 = A * B2;
const temp2 = A * B1;
const temp3 = A * B0;
const sum = temp1 + Number(`${temp2}0`) +  Number(`${temp3}00`);

console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`)
