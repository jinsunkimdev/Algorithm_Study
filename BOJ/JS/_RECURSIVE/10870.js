//피보나치 수5
let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => (input = Number(line)))
  .on("close", () => {
    let fiboArr = [0, 1];
    for (let n = 0; n < input - 1; n++) {
      fiboArr[n + 2] = fiboArr[n] + fiboArr[n + 1];
    }
    console.log(fiboArr[input]);
  });
