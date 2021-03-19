function solution(s) {
  let pNum = 0;
  let yNum = 0;
  let lower = s.toLowerCase();

  if (!lower.includes("p") && !lower.includes("y")) {
    return True;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (lower.split("")[i] === "p") {
        pNum += 1;
      }
      if (lower.split("")[i] === "y") {
        yNum += 1;
      }
    }
    console.log(pNum);
    return pNum === yNum ? true : false;
  }
}
solution("Pyy"); // false

// 다른 풀이

function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
