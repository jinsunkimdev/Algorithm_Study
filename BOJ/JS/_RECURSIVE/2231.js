// 분해합
let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = Number(line);
  })
  .on("close", () => {
    console.log(input);
  });
