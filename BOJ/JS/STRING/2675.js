'use strict'
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr= [];
rl.on('line', (line) => {
	inputArr.push(line);
}).on('close', () => {
	let testCase = Number(inputArr[0]);
	for(let i=1; i<=testCase; i++){
		let answer = '';
		let caseArr = [];
		caseArr = inputArr[i].split(' ');
		let caseCount = 0;
		caseCount = Number(caseArr[0]);
		let answerStrArr = [];
		answerStrArr = caseArr[1].split('');
		for(let j=0; j<answerStrArr.length; j++){
			answer += answerStrArr[j].repeat(caseCount);
		}
		console.log(answer);
	}
	process.exit();
});