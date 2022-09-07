# 1. 문자열을 이용한 풀이(반복문X)
A = int(input())
B = input()

print(A*int(B[2]))
print(A*int(B[1]))
print(A*int(B[0]))
print(A*int(B))

# 2. 문자열을 이용한 풀이(반복문O)
A = int(input())
B = input()

for i in range(3, 0, -1):

    print(A * int(B[i - 1]))

print(A * int(B))

# 3. 산술 연산자를 이용한 풀이
A = int(input())
B = int(input())

print(A * (B % 10))
print(A * (B % 100 // 10))
print(A * (B // 100))
print(A * B)
