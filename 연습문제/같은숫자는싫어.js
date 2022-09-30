function solution(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}


----------------------------------------------------py

def solution(arr):
    answer = []
    answer.append(arr[0])
    
    for i in range(1, len(arr)):  
        if arr[i-1] != arr[i]:
          answer.append(arr[i])

    return answer


----------------------------------------------------


def no_continuous(s):
    a = []
    for i in s:
        if a[-1:] == [i]: continue
        a.append(i)
    return a

return [s[i] for i in range(len(s)) if s[i] != s[i+1:i+2]]
