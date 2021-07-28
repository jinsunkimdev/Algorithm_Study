let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let inputNums = [];
inputNums = input[1].split(' ').map((el) => parseInt(el));
inputNums = inputNums.sort((a, b) => {
	return a-b;
});
let minValue = inputNums[0];
let maxValue = inputNums[inputNums.length-1];
console.log(`${minValue} ${maxValue}`);