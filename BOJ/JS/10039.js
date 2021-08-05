'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr = [];
rl.on('line', (line) => {
	inputArr.push(Number(line));
}).on('close', () => {
	let sum = 0;
	for(let i=0; i<inputArr.length; i++){
		if(inputArr[i]<40){
			inputArr[i] = 40;
		};
		sum += inputArr[i];
	}
	console.log(Math.floor(sum/5));
	process.exit();
});