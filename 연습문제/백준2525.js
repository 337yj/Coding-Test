let input = require('fs').readFileSync('예제.txt').toString().split('\n')

const current = input[0].split(' ').map(Number);

const currentHour = current[0];
const currentMinute = current[1];
const cookTime = Number(input[1]);

const cookEndTimeHour = parseInt((currentHour*60 + currentMinute + cookTime)/ 60) ;
const cookEndTimeMinute = parseInt((currentHour*60 + currentMinute + cookTime)% 60);

console.log(cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour, cookEndTimeMinute);
