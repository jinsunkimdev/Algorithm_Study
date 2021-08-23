let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let inputNums = [];
let count = 0;
inputNums = input.map((el) => parseInt(el));
let answer = inputNums[0];
for (i = 1; i <= 9; i++) {
	if (answer < inputNums[i]) {
		answer = inputNums[i];
		count = i;
	}
}
console.log(answer);
console.log(count + 1);
