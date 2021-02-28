// 자리수의 숫자를 모두 더해서 한 자리 숫자가 나올때 까지 더하기

function createCheckDigit(membershipId) {
  if (membershipId.length > 1) {
    while (membershipId.length != 1) {
      let sum = 0;
      for (num of membershipId) {
        sum += parseInt(num);
        membershipId = sum + ""; // 숫자를 문자열로 바꿔줌
      }
    }
  }
  return membershipId;
}

console.log(createCheckDigit("55555")); // 7
