class 강아지{
  constructor(type, color){
    this.type = type;
    this.color = color;
  }
  한살먹기(){  
    // a instanceof b, a가 b로부터 생성된 오브젝트인지 아닌지를 true/false로 알려주는 연산자
    //  this가 instanceof Cat인 경우에만 실행하도록 if문을 추가
    if( this instanceof 고양이) {
    this.age++
    }
  }
}

class 고양이 extends 강아지 {
  constructor(type, color, age){
    super(type, color);
    this.age = age;
  }
}

let 강아지1 = new 강아지('말티즈', 'white');
let 강아지2 = new 강아지('진돗개', 'brown');
let 고양이1 = new 고양이('코숏','yellow',2);

console.log(강아지1);  // { type: '말티즈', color: 'white' }
console.log(강아지2);  // { type: '진돗개', color: 'brown' }
console.log(고양이1);  // { type: '코숏', color: 'yellow', age: 3 }

고양이1.한살먹기();
console.log(고양이1);  // { type: '코숏', color: 'yellow', age: 3 }
