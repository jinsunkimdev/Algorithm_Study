//헤르만 민코프스키의 택시 기하학(비유클리드 기하학)
let input = 0;
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = line;
  })
  .on("close", () => {
    const euclidCalc = (radius) => {
      return Math.pow(radius, 2) * Math.PI;
    };
    const taxiCalc = (radius) => {
      return Math.pow(radius, 2) * 2;
    };
    console.log(euclidCalc(input).toFixed(6));
    console.log(taxiCalc(input).toFixed(6));
  });
