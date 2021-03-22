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

let a = 10;
let b = a++ + 5;
console.log(a, b); // a = 11, b = 15가 출력됨

let a = 10;
let b = ++a + 5;
console.log(a, b); // a = 11, b = 16이 출력됨

/*-------- 내림차순 오름차순 ---------*/
// 오름차순
arr1.sort((a, b) => {
  return a - b;
});
// 내림차순
arr1.sort((a, b) => {
  return b - a;
});
// 사전순으로 정렬
// a.localeCompare(b) 형태로 쓰면 사전순으로 정렬
function solution(strings, n) {
  return strings.sort((p, c) =>
    p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n])
  );
}
solution(["abce", "abcd", "cdx"], 1); // [ 'abcd', 'abce', 'cdx' ]

/*-------- 재귀함수 ---------*/
// 어떤 함수 안에서 자기자신을 다시 호출하는 함수
// 장점 - 코드가 DRY(Do not Repeat Yourself)해지고, Readability(가독성)가 올라간다.
// 단점 - 콜 스택을 많이 차지하는 단점도 존재.
// 그럼에도 재귀 함수는 얼마나 많은 반복이 필요할지 모를 경우, 또는 tree 자료 구조나 노드 사이를 traversing하는 작업이 필요할 경우에는 일반적인 반복문보다 훨씬 효율적인 해결책이 된다.

const countDown = (num) => {
  console.log(num);
  num--;
  if (num <= 0) {
    return false;
  }
  countDown(num);
};

countDown(5); // 5 4 3 2 1

// 사용 예시 재귀 - factorial
function factorial1(number) {
  if (number <= 2) return number;

  return factorial1(number - 1) * number;
}
// while - factorial
function factorial2(number) {
  let i = 1;
  let answer = 1;
  while (i <= number) {
    answer = answer * i;
    i++;
  }
  return answer;
}
