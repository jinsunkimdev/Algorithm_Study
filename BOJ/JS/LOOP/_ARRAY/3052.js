//나머지
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let inputArr = [];
rl.on('line',(line) => {
	inputArr.push(line);
}).on('close', () => {
	let inputNumArr = inputArr.map((el) => parseInt(el));
	let restArr = [];
	for(let i=0; i<=9; i++){
		let restNum = inputNumArr[i]%42;
		restArr.push(restNum);
	};
	let answer = [];
	restArr.forEach((num) => {
		if(answer.indexOf(num)===-1){
			answer.push(num);
		}
	});
	console.log(answer.length);
	process.exit();
});