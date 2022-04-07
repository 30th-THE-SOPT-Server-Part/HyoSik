// string
const name = '장서현';
console.log(typeof name);

// number
const age = 18;
console.log(typeof age);

// boolean
const server = true;
console.log(typeof server);

console.log(`안녕하세요. 제 이름은 ${name} 이구요, 나이는 ${age}살이고, ${server} 파트입니다`);

// null. typeof null은 object라고 나오는데, 이는 javascript의 오류이다.
console.log(typeof null);

// undefined
console.log(typeof undefined);

// array, map
let numArr = [1, 2, 3, 4];
const newNumArr = numArr.map(x => x * 2);
console.log('numArr', numArr);
console.log('newNumArr', newNumArr);
console.log(typeof newNumArr); // array도 object

newNumArr.map(x => { // map은 아예 새로운 배열을 생성
    console.log(x);
})

for (const x of newNumArr) { // for-of는 순회만
    console.log(x);
}

// object
const sopt = {
    season : 30,
    group : ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'iOS'],
    introduce: function () {
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`);
        });
    }
}
console.log(sopt);
console.log(typeof sopt); // object

// function
sopt.introduce();
console.log(typeof sopt.introduce); // function도 object
console.log(typeof sopt.introduce()); // 이렇게 하면 type이 undefined로 출력됨

// 함수 선언식
function sum(a, b) {
    return a + b;
}

// 함수 표현식
let sum2 = (a, b) => {
    return a * b;
}

// JS의 함수는 일급 객체로 변수, 데이터에 담을 수 있고, 파라미터, 반환값으로 사용 가능