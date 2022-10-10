function solution(nums) {
  var answer = 0;
  //폰켓몬 중복제거 후 리스트 배열로 변환
  let newNums = new Set(nums);
  newNums = Array.from(newNums);

  //n = 가질 수 있는 폰켓몬 수
  let n = nums.length / 2;

  let tmp = [];

  //n만큼의 폰켓몬을 tmp배열에 삽입
  for (let i = 0; i < n; i++) {
    tmp.push(newNums[i]);
  }

  //위 반복문을 통해 N/2마리에 해당하는 폰켓몬이
  //tmp에 들어있다. 하지만 폰켓몬 수 보다 반복문이
  //더 실행되었다면 undefinded값이 저장된다.

  //undefined 삭제
  tmp = tmp.filter((el) => el !== undefined);
  //tmp에 있는 폰켓몬 수가 선택할 수 있는 최대 종류이다.
  answer = tmp.length;
  return answer;
}
