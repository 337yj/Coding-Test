let cost = BigInt(0);

const distance = [2, 3, 1].map((v) => BigInt(v)); // distance: 각 도시 사이의 도로 길이.
// 2 3 1
let price = [5, 2, 4, 1].map((v) => BigInt(v)); // price : 도시마다 주유소의 리터당 가격
//  5 2 4 1

let lowestPrice = price[0]; // 처음에는 맨 처음 값을 최저가를 지정
for (let i = 0; i < price.length - 1; i++) {
  if (lowestPrice > price[i]) {
    //  현재 값이 최저가보다 작다면 최저가를 갱신해준다.
    lowestPrice = price[i];
  }
  cost += lowestPrice * distance[i];
}
console.log(cost.toString());
