const readline = require('readline');
const internal = require('stream');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let inputArr = [];
rl.on('line',(line) => {
	inputArr.push(line);
}).on('close',() => {
	let totalGrade = Number(inputArr[0]);
	let inputNumArr = [];
	let gradeArr = [];
	for(let i=1; i<=inputArr.length-1; i++){
		inputNumArr[i-1] = inputArr[i].split(' ');
	};
	gradeArr = Number(inputNumArr);
	console.log(inputArr);
	console.log(inputNumArr);
	console.log(gradeArr);
	process.exit();
});