const year = require('fs').readFileSync('예제.txt').toString();

(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? console.log('1') : console.log('0')


// 파이썬
// -----------------------------------------------------
// a = int(input())

// if (a % 4 == 0 and a % 100 != 0)or(a%400 == 0):
//     print(1)
// else:
//     print(0)
