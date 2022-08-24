# 정수들 정렬

n = int(input())
data = list(map(int, input().split()))
data.sort()

result = 0
count = 0 # 현재 그룹에 포함된 모험가의 수 (그룹결성시 0으로 업뎃 반복)

for i in data:
  count += 1 # 현재 그룹에 해당 모험가를 포함시키기
  if count >= i:
    result += 1 # 총 그룹의 수 증가시키기
    count = 0 # 현재 그룹에 포합된 모험가의 수 초기화

print(result) # 총 그룹의 수 출력