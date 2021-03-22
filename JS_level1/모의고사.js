function solution(answers) {
  let answer = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let aa1 = answers.filter((v, i) => v === a1[i % a1.length]).length;
  let aa2 = answers.filter((v, i) => v === a2[i % a2.length]).length;
  let aa3 = answers.filter((v, i) => v === a3[i % a3.length]).length;
  let max = Math.max(aa1, aa2, aa3);

  if (max === aa1) {
    answer.push(1);
  }
  if (max === aa2) {
    answer.push(2);
  }
  if (max === aa3) {
    answer.push(3);
  }

  return answer;
}

solution([1, 3, 2, 4, 2]); //[1, 2, 3]
