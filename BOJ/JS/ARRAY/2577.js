//숫자의 개수
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let inputArr = [];
rl.on('line', (line) => {
	inputArr.push(line);
}).on('close', () => {
	let inputNumArr = [];
	inputNumArr = inputArr.map((el) => parseInt(el));
	let numA = inputNumArr[0];
	let numB = inputNumArr[1];
	let numC = inputNumArr[2];
	let numMulti = numA * numB * numC;
	let multipleArr = [];
	multipleArr = String(numMulti).split('');
	multipleNumArr = multipleArr.map((el) => parseInt(el));
	let answer = [0,0,0,0,0,0,0,0,0,0];
	for(let i=0; i<=9; i++){
		for(let j=0; j<=9; j++){
			if(multipleNumArr[j]===i){
			answer[i] = answer[i]+1;
		}};
		console.log(answer[i]);
	};
	process.exit();
});