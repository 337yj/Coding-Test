function solution(n) {
  return n.toString().split('').reverse().map(o => o = parseInt(o));
}


-----------------------------------------------------------------py

def digit_reverse(n):
    return list(map(int, reversed(str(n))))
