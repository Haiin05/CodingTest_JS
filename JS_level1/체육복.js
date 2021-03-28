function solution(n, lost, reserve) {
  let answer = 0;
  let studentArr = [];
  for (let i = 0; i <= n; i++) {
    studentArr.push(1);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (i === lost[j]) studentArr[i] = 0;
    }
    for (let j = 0; j < reserve.length; j++) {
      if (i === reserve[j]) studentArr[i] += 1;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (studentArr[i] === 0 && studentArr[i - 1] === 2) {
      studentArr[i - 1] = 1;
      studentArr[i] = 1;
    } else if (studentArr[i] === 0 && studentArr[i + 1] === 2) {
      studentArr[i + 1] = 1;
      studentArr[i] = 1;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (studentArr[i] > 0) answer++;
  }
  return answer;
}
