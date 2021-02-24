function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

//set 을 이용하여 중복값을 없애준다. 아래 2가지 방법을 더 참고해도 좋다.

//const array = ['a' , 1, 2, 'a' , 'a', 3];
// 1: 'Set'
//[...new Set(array)];
// 2: 'Filter'
//array.filter((item, index) => array.indexOf(item) === index);
// 3: 'Reduce'
//array.reduce((unique, item) =>
//  unique.includes(item) ? unique : [...unique, item], []);
// ['a', 1, 2, 3]

//sort()를 이용하여 오름차순을 만들어 주는데 안에 인자를 의도하는 오름차순으로 넣어줘야 한다.
