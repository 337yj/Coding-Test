// 수열 최소값 위치

// 수열이 주어질 때, 이 수열에 있는 수 중 최소값의 위치를 모두 출력하는 프로그램을 작성.
// 입력은 자연수로 된 배열을 받고, 시작 위치는 0로 계산하여 최소값의 위치를 배열로 반환한다.
// 모든 수는 100이하의 자연수로 입력 받는다.

function answer(nums) {
  let result = [];

  // 1. 최소값 위치 찾기 -> 배열 순회
  // min이라는 변수 만들어둠 (가장 큰 숫자로, 100이하의 자연수라니까 100으로 해도됨)
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  // 2. 최소값에 해당하는 위치 index 찾기
  // 배열에 대한 index 변수 = count
  // 요소가 result 에 들어가면 count++

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      result[count++] = i;
    }
  }
  return result;
}
//   for (let i = 0; i < nums.length; i++){
//     if (min == nums[i]){
//         result.push(i);
//     }
//   }
//   return result;
//}

let input = [
  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [11, 15, 12, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  console.log(answer(input[i]));
}

// [ 1, 3 ]
// [ 0, 3 ]
// [ 0, 4 ]
