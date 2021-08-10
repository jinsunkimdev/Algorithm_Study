'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr = [];
rl.on('line', (line) => {
	inputArr = line.split(' ');
	rl.close();
}).on('close', () => {
	let inputNumArr = [];
	let fixedCost = 0;
	let gainPrice = 0; 
	let countNum = 0;
	inputNumArr = inputArr.map((el) => parseInt(el));
	while(true){
		fixedCost = inputNumArr[0] + inputNumArr[1]*countNum;
		gainPrice = inputArr[2]*countNum;
		if(fixedCost<gainPrice) {
			break;
		}
		countNum++;
	}
	console.log(countNum);
	process.exit();
}); 