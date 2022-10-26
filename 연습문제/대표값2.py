# 입력한 수들을 저장하는 리스트 변수를 선언함
numbers = []

# 수 5개를 입력해야하므로 5번 반복함
for index in range(5):
    # 숫자 하나를 입력하고 정수형으로 변환함
    number = int(input())

    # 입력한 숫자를 numbers 리스트 변수에 넣어줌
    numbers.append(number)

# numbers에 있는 숫자들을 모두 더하고 5로 나누어 평균을 구하는 변수를 선언
average = int(sum(numbers) / 5)
# numbers에 있는 숫자들을 오름차순으로 정렬하고 가운데 있는 숫자인 중앙값을 구하는 변수를 선언
median = sorted(numbers)[2]

# 평균과 중앙값을 출력 형식에 맞게 출력함
print(average)
print(median)
