let swap = function (arr, idx_1, idx_2) {
    let tmp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) { // 배열을 매개변수로 받음
for (let i = 0; i < arr.length; i++) { // 시작할 위치, 총 반복 횟수
    for (let j = 0; j < arr.length -1; j++) { // 한바퀴돈 뒤, 인접한 값끼리 비교
    if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
    }
    }
}
};

let bubbleSort_2 = function (arr) { // 배열을 매개변수로 받음
for (let i = 0; i < arr.length - 1; i++) { // 시작할 위치, 총 반복 횟수
    for (let j = 0; j < arr.length -i -1; j++) { // 한바퀴돈 뒤, 인접한 값끼리 비교
    if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
    }
    }
}
};
// tmp 는 변수명 tmp라는 변수로 임시 저장 한것
// i for문은 어차피 0번째 있던값이 맨뒤로 가고 j로 한바퀴 돌린 뒤 
// 다시 맨앞(i값이 얼마든 j는 0부터시작하니까)으로 와야하니까 ㄱㅊ
// j for문에 -i를 해주면 이미 정렬된 뒤쪽 얘들은 빼고 할 수 있음
// j for문에 -1은 밑에 j+1을 해줬으니까 뺀것
// j for문에 -1이니까 i에도 -1 해서 1차례 빼줘도됨

let bubbleSort_3 = function (arr) { // 배열을 매개변수로 받음
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) { // 시작할 위치, 총 반복 횟수
        swapped = false;
        for (let j = 0; j < arr.length -i -1; j++) { // 한바퀴돈 뒤, 인접한 값끼리 비교
        if (arr[j] > arr[j + 1]) {
            swap(arr, j, j + 1);
            swapped = true;
        }
        if(!swapped) break;  // 안쪽 for문 다하고 나왔을 때 swap 한번도 안했으면 중단해라
        }
    }
    };
// swap 하지 않았던건 이미 정렬되어있다는 거니까 
// swap을 한번도 안했다면 중단되도록 조건문 걸음

let array = [6, 5, 1, 3, 2, 4];
// let array = [...init_array];
bubbleSort_1(array);
console.log(array);
bubbleSort_2(array);
console.log(array);
bubbleSort_3(array);
console.log(array);
