function solution(s, n) {
  const arrUpper = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const arrLower = arrUpper.map((a) => a.toLowerCase());

  let answer = "";

  if (s.length > 0) {
    for (let i of s) {
      if (arrUpper.indexOf(i) > -1) {
        if (arrUpper.indexOf(i) >= 25) {
          answer += arrUpper[24 - arrUpper.indexOf(i) + n];
        } else {
          answer += arrUpper[arrUpper.indexOf(i) + n];
        }
      } else {
        if (arrLower.indexOf(i) >= 25) {
          answer += arrLower[24 - arrLower.indexOf(i) + n];
        } else {
          answer += arrLower[arrLower.indexOf(i) + n];
        }
      }
    }
  }
  return answer;
}

solution("aBc", 1); // "bCd"
