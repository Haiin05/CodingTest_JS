function solution(arr, divisor) {
  let arr1 = arr.filter((v, i) => {
    return v % divisor === 0;
  });
  let sortedArr = arr1.sort((a, b) => {
    return a - b;
  });

  return arr1.length === 0 ? [-1] : sortedArr;
}

solution([5, 9, 7, 10], 5); // [5, 10]
