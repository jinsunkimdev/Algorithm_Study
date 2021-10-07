//터렛
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    const T = Number(input.shift());
    let inputArr = [];
    for (let n = 0; n < T; n++) {
      inputArr.push(input[n].split(" ").map(Number));
      let firstX = inputArr[n].shift();
      let firstY = inputArr[n].shift();
      let firstR = inputArr[n].shift();
      let secondX = inputArr[n].shift();
      let secondY = inputArr[n].shift();
      let secondR = inputArr[n].shift();
      let distance = Math.sqrt(
        Math.pow(firstX - secondX, 2) + Math.pow(firstY - secondY, 2)
      );
      let rDiff = Math.abs(firstR - secondR);
      let rSum = firstR + secondR;
      if (distance == 0 && rDiff == 0) {
        console.log(-1);
      } else if (distance > rSum || distance < rDiff) {
        console.log(0);
      } else if (distance == rSum || distance == rDiff) {
        console.log(1);
      } else if (distance < rSum && distance > rDiff) {
        console.log(2);
      }
    }
  });
