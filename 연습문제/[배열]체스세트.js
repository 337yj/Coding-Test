// 배열
// 체스 세트
// 오래된 창고에서 체스판과 체스 기물을 발견했다.
// 불행히도 기물 별 개수가 부족하거나 많아, 완전한 한 세트를 이루고 있지 못하고 있어 보인다.
// 게임을 하기 위해 부족하거나 많은 기물의 개수를 계산하여 반환하는 프로그램을 제작하시오.
// 기물의 개수는 배열 형태로 아래와 같이 king부터 pawns 순으로 들어오며
// 한 게임을 하기 위해 필요한 기물의 개수는 아래와 같다.
// king(1), queen(1), rooks(1), bishops(2), knights(2), pawns(8)

function answer(chess){
    let result = [];

    // 1. 각 index 별로 정해진 숫자 <-- 체스 게임을 하기 위한 기물의 개수
    let refer = [1, 1, 2, 2, 2, 8]
    // 2. 각 index 별로 정해진 숫자와 비교해서 얼마만큼 부족한지, 더 많은지 계산하여 result 배열에 업데이트
    let count = 0;
    for(let i=0; i<chess.length; i++){
        result[count++] = refer[i] - chess[i]
    }
    

    return result;
}

let input = [
    [0,1,2,2,2,7],
    [2,1,2,1,2,1]
]

for(let i=0; i<input.length; i++){
    console.log(answer(input[i]));
}
