//직각삼각형
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    let inputArr = [];
    for (let n = 0; n < input.length; n++) {
      inputArr.push(input[n].split(" ").map((el) => Number(el)));
      inputArr[n].sort((a, b) => {
        return a - b;
      });
    }
    for (let n = 0; n < inputArr.length - 1; n++) {
      inputArr[n][0] * inputArr[n][0] + inputArr[n][1] * inputArr[n][1] ==
      inputArr[n][2] * inputArr[n][2]
        ? console.log("right")
        : console.log("wrong");
    }
  });
