// 골드바흐의 추측
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    let inputNum = [];
    inputNum = input.map((str) => Number(str));
    const testCase = inputNum.shift();
  });
