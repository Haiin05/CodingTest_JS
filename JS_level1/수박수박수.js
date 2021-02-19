//1. 처음에는 가장 편한 배열로 접근

function solution(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr.push("수");
    } else if (i % 2 === 1) {
      arr.push("박");
    }
  }
  return arr.join("");
}

//2. 스트링으로 접근

function solution(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      result += "수";
    } else {
      result += "박";
    }
  }
  return result;
}

//3. 삼항연산자 이용하여 리팩토링

function solution(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += i % 2 === 0 ? "수" : "박";
  }
  return result;
}
