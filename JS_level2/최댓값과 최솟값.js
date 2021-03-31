function solution(s) {
  let a = s.split(" ");
  return [Math.min(...a), Math.max(...a)].join(" ");
}

solution("-1 -2 -3 -4"); // '-4 -1'

// 다른 풀이
function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}

// '' 문자열도 Math.min 을 쓸 수 있다.
