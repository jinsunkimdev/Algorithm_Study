'use strict';
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr = [];
rl.on('line', (line) => {
	inputArr.push(line);
}).on('close', () => {
	let inputNumArr = inputArr.map((inputArr) => Number(inputArr));
	let count = inputNumArr[0];
	let secondInputArr = [];
	let answer = 0;
	secondInputArr = inputArr[1].split('').map((inputArr) => Number(inputArr));
	for(let i=0; i<count; i++){
		answer += secondInputArr[i];
	}
	console.log(answer);
	process.exit();
})