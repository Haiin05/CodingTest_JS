function solution(arr1, arr2) {
  let answer = new Array(arr1.length);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = new Array(arr1[0].length);
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

// 다른 풀이

function solution(arr1, arr2) {
  return arr1.map((v, i) => v.map((a, j) => a + arr2[i][j]));
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
); // [ [ 4, 6 ], [ 7, 9 ] ]

// 이중 배열은 바로 만들어지지 않기 때문에 미리 배열의 길이만큼 만들어 놓고 시작해야 한다.
// 2-5 줄은 이중배열 만들어 주는 for문
// 같은 길이의 배열끼리 더하는 것은 map() 을 먼저 생각해 볼 만 하다.
