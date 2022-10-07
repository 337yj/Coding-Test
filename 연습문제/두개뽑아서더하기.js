function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}


-----------------------------------------------------py

from itertools import combinations
def solution(numbers):
    answer = set()
    for i in list(combinations(numbers,2)):
        answer.add(sum(i))
    return sorted(answer)



def solution(numbers):
    # 답을 담을 배열
    answer = []
    # 주어진 숫자로 만들 수 있는 모든 숫자 배열 (중복 허용)
    numbers_sum_overlap = []
    # 주어진 숫자들로 만들 수 있는 모든 숫자 구해보기
    # 이중 for문으로 자기 자신과 같은 경우를 제외하고 다른 인덱스 더하기
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            # 인덱스가 같은 경우
            if i == j:
                continue
            # 인덱스가 다른 경우 더하기
            numbers_sum_overlap.append(numbers[i] + numbers[j])
    # set 집합 자료형으로 변환후 리스트로 재 변환하여 answer에 넣기 (중복 제거)
    answer = list(set(numbers_sum_overlap))
    # 오름차순 변환
    answer.sort()
    return answer
