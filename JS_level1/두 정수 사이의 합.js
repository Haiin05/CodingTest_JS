// if랑 for 밖에 모르는 바보

function solution(a, b) {
  let arr = [];
  if (a === b) {
    return a;
  } else {
    if (a > b) {
      for (let i = b; i <= a; i++) {
        arr.push(i);
      }
    } else {
      for (let i = a; i <= b; i++) {
        arr.push(i);
      }
    }
  }
  let result = 0;
  for (let j = 0; j < arr.length; j++) {
    result += arr[j];
  }
  return result;
}

solution(5, 3); //12

// 다른 풀이

function solution(a, b) {
  let result = 0;
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
// 양쪽 끝값을 더해가면 다 같은 숫자를 이용한 원리
