function solution(n, m) {
  var answer = [];
  var minNum = Math.min(a, b);
  var maxNum = Math.max(a, b);
  answer[0] = gcd(minNum, maxNum);
  answer[1] = lcm(minNum, maxNum);
  return answer;
}
// 최대공약수
function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum);
}

solution(3, 12);
// 유클리드 호제법
// 1) 우선 둘 중 작은 수를 minNum, 큰 수를 maxNum로 다시 세팅한다.

// 2) 최소공배수 : 두 수의 공통된 배수(공배수) 중 가장 작은 수
// minNum * maxNum / 최대공약수

// 3) 최대공약수 : 두 수의 공통된 약수(공약수) 중 가장 큰 수
// 두 수를 나눠봐서 나머지가 0이면 (즉 나눠지면) maxNum가 최대 공약수이고,
// 나머지가 생긴다면 maxNum와 나머지값을 다시 비교한다.

function solution(n, m) {
  function u(n, m) {
    return m % n ? u(m % n, n) : n;
  }
  const gcd = u(n, m);
  return [gcd, (n * m) / gcd];
}

solution(3, 12);
