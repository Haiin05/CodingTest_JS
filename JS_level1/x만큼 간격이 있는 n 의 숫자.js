function solution(x, n) {
  let answer = [];
  for (let i = 1; i < n + 1; i++) {
    answer.push(x * i);
  }
  return answer;
}

solution(2, 5); //[ 2, 4, 6, 8, 10 ]

// 다른 풀이

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
