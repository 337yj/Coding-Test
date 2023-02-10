//   '/dev/stdin'
const input = require('fs').readFileSync('예제.txt').toString().trim().split("\n").map((v) => v.split(" ").map((v) => +v));

const [[N, K], arr] = input;

// N = arr.length
// K -> 배열 merge과정에서 K번째 저장되는 수를 구해야 함.

const merge = (arr1, arr2) => { // 4 5 1 , 3 2
  let result = [];
  let [i, j] = [0, 0];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    count++;
    if (count === K) target = result[result.length - 1];
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    count++;
    if (count === K) target = result[result.length - 1];
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    count++;
    if (count === K) target = result[result.length - 1];
  }
  return result;
};

let count = 0;
let target;
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2); // 3
  let left = mergeSort(arr.slice(0, mid)); // 4 5 1
  let right = mergeSort(arr.slice(mid)); // 3 2
  return merge(left, right);
};

mergeSort(arr);
if (!target) target = -1;
console.log(target);
