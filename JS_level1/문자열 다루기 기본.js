function solution(s) {
  return s.length === 4 || s.length === 6
    ? s.split("").every((a) => !isNaN(a))
    : false;
}

// isNaN()
// 주어진 값의 유형이 Number이고 값이 NaN이면 true, 아니면 false.
// .every()
// .every()는 배열의 모든 원소가 조건에 맞는지 검사하는 메서드. 모든 원소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false를 반환.
// 0.01 과 같은 예제를 false 로 걸러내기 위해 문자 하나씩 골라서 확인해줌
