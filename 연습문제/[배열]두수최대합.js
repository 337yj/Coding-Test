// 배열
// 두 수 최대 합
// 수열이 주어질 때, 이 중 두 개의 수를 선택하여 최대 합이 나올 수 있도록 프로그램을 제작하시오
// 입력은 정수로 된 배열을 받고, 최대 합이 나올 수 있는 두 수를 배열 형태로 반환한다.
// 배열로 입력되는 정수는 10~20개 사이이며, 정수의 범위는 -20 ~ +20 사이의 값이 입력된다.

function answer(nums) {
    let result = [];

    // 1. 1번째 최대값, 2번째 최대값
    // 자리 초기화
    // result[0] <-- 1번째 최대값 저장, result[1] <-- 2번째 최대값 저장
    result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];

    for (let i=2; i<nums.length; i++){ 
            if(nums[i] > result[0]){
                result[1] = result[0] // 1번째로 value shift
                result[0] = nums[i]; // 0번째로 업데이트 해줌
            } else if (nums[i] > result[1]){ // nums에 비교된 값이 큰 값이 아닐 때
                result[1] = nums[i];
            } 
    }
    return result;
}

let input = [
    [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
    [3, 7, -14, 2, -6, 13, -20, -2, -7, 19]
]

for(let i=0; i<input.length; i++){
    console.log(answer(input[i]));
}
