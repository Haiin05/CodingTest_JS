function solution(s) {
  return;
  s.split(" ")
    .map((v, i) =>
      v
        .split("")
        .map((v1, i1) => (i1 ? v1.toLowerCase() : v1.toUpperCase()))
        .join("")
    )
    .join(" ");
}
solution("3people unFollowed me"); // '3people Unfollowed Me'

// 다른 풀이

function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
