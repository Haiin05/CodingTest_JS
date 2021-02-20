//1. for 문으로 풀어보기

function solution(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
}

//2. reduce() 로 풀어보기

function solution(arr) {
  return (
    arr.reduce((ar, cur) => {
      return ar + cur;
    }) / arr.length
  );
}
