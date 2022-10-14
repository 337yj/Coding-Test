function solution(dartResult) {
  var answer = 0;
  let score = 0;
  let cnt = [];

  for (let i = 0; i < dartResult.length; i++) {
    //점수가 주어질때
    if (!isNaN(dartResult[i])) {
      //i-1이 1이고 i가 숫자면 10점..
      //즉 10점인 경우와 그 외의 경우 처리
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
      //보너스 S일때
    } else if (dartResult[i] === "S") {
      cnt.push(score);
      //보너스 D일때
    } else if (dartResult[i] === "D") {
      cnt.push(Math.pow(score, 2));
      //보너스 T일때
    } else if (dartResult[i] === "T") {
      cnt.push(Math.pow(score, 3));
      //옵션 *일떄
    } else if (dartResult[i] === "*") {
      cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
      //옵션 #일때
    } else if (dartResult[i] === "#") {
      cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
    }
  }
  //3개의 점수 합산
  answer = cnt.reduce((acc, cur) => acc + cur, 0);
  return answer;
}


--------------------------------------------------------------py

def solution(dartResult):
    n = ''
    score = []
    for i in dartResult:
        if i.isnumeric():
            n += i
        elif i == 'S':
            n = int(n)**1
            score.append(n)
            n = ''
        elif i == 'D':
            n = int(n)**2
            score.append(n)
            n = ''
        elif i == 'T':
            n = int(n)**3
            score.append(n)
            n = ''
        elif i == '*':
            if len(score) > 1:
                score[-2] = score[-2] * 2
                score[-1] = score[-1] * 2
            else:
                score[-1] = score[-1] * 2
        elif i == '#':
            score[-1] = score[-1] * -1
        
    return sum(score)
