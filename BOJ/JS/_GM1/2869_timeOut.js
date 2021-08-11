'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNumArr = [];
rl.on('line', (line) => {
	inputNumArr = line.split(' ');
	rl.close();
}).on('close', () => {
	let A = Number(inputNumArr[0]);
	let B = Number(inputNumArr[1]);
	let V = Number(inputNumArr[2]);
	let currentHigh = 0;
	let answer = 0;
	while(true){
		currentHigh += A;
		answer++;
		if(currentHigh>=V){
			break;
		}
		currentHigh -= B;
	}
	console.log(answer);
	process.exit();
}); 