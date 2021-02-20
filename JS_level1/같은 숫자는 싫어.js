//1. for 문으로 풀어보기

function solution(arr) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

//2. filter() 로 풀어보기

function solution(arr) {
  return arr.filter((el, i) => arr[i] !== arr[i + 1]);
}
