const input = [];
let cardList = undefined;
const strToInt = (arr) => arr.split(" ").map((arrChar) => Number(arrChar));
const binarySearch = (num, startIndex, endIndex) => {
  if (startIndex > endIndex) return false;
  if (startIndex === endIndex) return cardList[startIndex] === num;
  const pivotIndex = Math.floor((startIndex + endIndex) / 2);
  if (num === cardList[pivotIndex]) return true;
  else if (num > cardList[pivotIndex])
    return binarySearch(num, pivotIndex + 1, endIndex);
  else if (num < cardList[pivotIndex])
    return binarySearch(num, startIndex, pivotIndex - 1);
};
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function(line) {
    input.push(line.trim());
  })
  .on("close", function() {
    // Binary Search Function
    const finalIndex = Number(input[0]) - 1;
    // 상근카드들
    cardList = strToInt(input[1]).sort((a, b) => a - b);
    // 비교카드들
    searchArr = strToInt(input[3]);
    const answer = searchArr.reduce(
      (acc, cur) => (acc += `${binarySearch(cur, 0, finalIndex) ? 1 : 0} `),
      ""
    );
    console.log(answer);
  });
