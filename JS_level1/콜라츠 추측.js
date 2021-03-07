function solution(num) {
  var answer = 0;
  let a = num;
  while (a !== 1) {
    if (a % 2 === 0) {
      a /= 2;
      answer += 1;
    } else {
      a = a * 3 + 1;
      answer += 1;
    }
  }
  console.log(a, answer);

  return answer >= 500 ? -1 : answer;
}

solution(626331); // -1

// 다른 사람 풀이

function collatz(num, count = 0) {
  return num == 1
    ? count >= 500
      ? -1
      : count
    : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}
