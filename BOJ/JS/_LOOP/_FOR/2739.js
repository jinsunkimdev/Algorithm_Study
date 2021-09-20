let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
for (i = 1; i <= 9; i++) {
  console.log(`${input[0]} * ${i} = ${input[0] * i}`);
}
console.log(fs);

