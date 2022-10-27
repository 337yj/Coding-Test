def sol(nums, k):
    nums.sort(reverse=True)
    print(nums[k - 1])


n, k = map(int, input().split())
nums = list(map(int, input().split()))
sol(nums, k)

-----------------------------------------------js

let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

const n = input[0].split(' ')[1]

console.log(n) // 2

// sort를 이용해서 정렬해주고 
const list = input[1].split(' ').map((x) => +x).sort((a, b) => b - a)

// 커트라인에 해당되는 (상 받는 사람 중 가장 낮은 점수) 점수를 출력한다.
console.log(list[n - 1])
