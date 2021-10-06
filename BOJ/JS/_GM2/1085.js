//직사각형에서의 탈출
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.trim());
  })
  .on("close", () => {
    let inputNum = input[0].split(" ").map(Number);
    const x = inputNum.shift();
    const y = inputNum.shift();
    const w = inputNum.shift();
    const h = inputNum.shift();
    const xdiff = w - x;
    const ydiff = h - y;
    const leastDistance = [x, y, xdiff, ydiff];
    const answer = Math.min.apply(null, leastDistance);
    console.log(answer);
  });
