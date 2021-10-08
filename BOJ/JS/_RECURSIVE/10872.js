//팩토리얼
let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => (input = Number(line)))
  .on("close", () => {
    let begin = 1;
    for (let n = 1; n <= input; n++) {
      begin = begin * n;
    }
    console.log(begin);
  });
