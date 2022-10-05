// 없는 숫자의 합 = 0부터 9까지 전체 합 - 있는 숫자의 합
function solution(numbers) {
  return 45 - numbers.reduce((acc, e) => acc + e, 0);
}


----------------------------------------------------------------py

def solution(numbers):
    answer = 0
    for i in range(10):
        if i not in numbers:
            answer += i
    
    return answer



def solution(numbers):
    numbers = set([i for i in range(10)]) - set(numbers)
    return sum(numbers)
