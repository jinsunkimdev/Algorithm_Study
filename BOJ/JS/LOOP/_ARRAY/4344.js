const readline = require('readline');
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
	let test = [];
	for(let i=1; i<=inputArr.length-1; i++){
		inputNumArr[i-1] = inputArr[i].split(' ');
	};
	for(let j=0; j<inputNumArr.length; j++){
		for(let k=0; k<inputNumArr.length; k++){
			gradeArr = Number(inputNumArr[j][k]);
		};
	};
	console.log(inputNumArr);
	console.log(gradeArr);
	process.exit();
});