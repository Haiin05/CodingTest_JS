function solution(s) {
  var answer = "";
  let a = s.length;

  a % 2 !== 0
    ? (answer += s[Math.floor(a / 2)])
    : (answer += s[Math.floor(a / 2) - 1] + s[Math.floor(a / 2)]);

  return answer;
}

solution("qwer"); // "we"

// 다른 풀이

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
