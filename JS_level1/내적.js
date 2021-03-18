function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 다른 풀이

function solution(a, b) {
  let answer = 0;
  a.forEach((v, i) => {
    answer += v * b[i];
  });

  return answer;
}
