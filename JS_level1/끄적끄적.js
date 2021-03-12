/*-------- map() 과 filter() 의 차이점을 확인해보자. ---------*/
// 1. 공통점
// 1-1. '기존배열' 보존 하면서,
// 1-2. 요소들을 순회,
// 1-3. 새로운 배열을 만들어 낸다.
// 2. 차이점
// 2-1. map() : 콜백함수가 적용된 새 요소 반환 (원래 '배열 수'를 그대로 반환)
// 2-2. filter() : 콜백함수의 조건을 만족한 요소만 반환 (만족한 것만 반환해서 배열의 개수가 원래배열과 다를 수 있음)

arr = [1, 1, 3, 3, 0, 1, 1];

let aa = arr.filter((v, i) => v > 2); // [3, 3]
let bb = arr.map((v, i) => v > 2); // [false, false, true,  true, false, false, false]

/*-------- forEach() 는? ---------*/
// forEach() 는 map()과 같이  요소 하나하나에 콜백함수를 실행한다.
// 하지만, 아래와 같이 실행한 값을 리턴하지 않는다.
// 아래와 같은 특징 때문에 forE(achsms 원본을 수정하지 않고 도구로서만 사용되어 새로운 배열(값)들을 생성
// map() 은 변수에 할당하여 사용한다.

const arr = [1, 2, 3, 4, 5];
const mulArr = [];

arr.forEach((num) => {
  mulArr.push(num * 3);
});

console.log(mulArr); // [3, 6, 9, 12, 15]

/*-------- 숫자 0 은 false ---------*/
//  0, -0, null, false,  NaN, undefined, 빈 문자열('')
// [] 빈 배열은 true

console.log(0 ? 1 : 2); // 2

/*-------- [a, b] = [b, a] ---------*/
const aaa = (a, b) => {
  [a, b] = [b, a];
  console.log([b, a]); // [1, 5]
};
aaa(1, 5);

/*-------- split -> apply(map() or sort()) -> combine(join() or reduce()) ---------*/
"Ppayay".split("").filter((v) => ["P", "p"].includes(v)); // [ 'P', 'p' ]

/*-------- [조건].includes(비교대상) ---------*/

const arr = [1, 1, 3, 3, 0, 1, 1];

let aaa = [4, 6].includes(arr.length); // arr.length === 4 || arr.length === 6 와 같은 뜻

console.log(aaa); //false

/*-------- ++a / a++ 차이점 ---------*/
// ++(전위증가)
// (후위증가)++

var a = 10;
var b = a++ + 5;
console.log(a, b); // a = 11, b = 15가 출력됨

var a = 10;
var b = ++a + 5;
console.log(a, b); // a = 11, b = 16이 출력됨
