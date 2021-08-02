//세준이 평균
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let inputArr = [];
rl.on('line',(line) => {
	inputArr.push(line);
}).on('close',() => {
	let numKinds = Number(inputArr[0]);
	let subjectArr = [];
	subjectArr = inputArr[1].split(' ').map((el) => parseInt(el));
	let maxValue = subjectArr.reduce((a, b) => {
		return Math.max(a, b);
	});
	let fakeScoreArr = [];
	for(let i=0; i<subjectArr.length; i++){
		fakeScoreArr.push((subjectArr[i]/maxValue));
	};
	fakeScoreArr.map((el) => parseInt(el));
	let answer = 0;
	let totalNum = 0;
	for(let i=0; i<fakeScoreArr.length; i++){
		totalNum += fakeScoreArr[i]*100;
	}
	answer = totalNum/numKinds;
	console.log(answer);
	process.exit();
});