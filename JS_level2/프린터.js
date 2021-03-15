function solution(priorities, location) {
  let answer = 0;
  let result = location;
  while (priorities.length > 0) {
    if (priorities.some((x) => x > priorities[0])) {
      priorities.push(priorities[0]);
      priorities.shift(0);

      if (result === 0) {
        result += priorities.length - 1;
      } else {
        result -= 1;
      }
    } else {
      answer += 1;
      priorities.shift();

      if (result === 0) {
        break;
      } else {
        result -= 1;
      }
    }
  }
  return answer;
}

solution([2, 1, 3, 2], 2); // 1
