// format from M/D/YYYY to YYYYMMDD

function formatDate(userDate) {
  let date = userDate.split("/");
  return `${date[2]}${("0" + date[0]).slice(-2)}${("0" + date[1]).slice(-2)}`;
}

function formatDate(userDate) {
  let date = userDate.split("/");
  return date[2].concat(("0" + date[0]).slice(-2), ("0" + date[1]).slice(-2));
}

console.log(formatDate("12/31/2014")); // '20141231'
console.log(formatDate("1/1/2014")); // '20140101'
