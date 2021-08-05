//x보다 작은 수
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNum = [];
let inputArr = [];
let secondArr = [];
let criet = 0;
let answer = [];
rl.on('line', (line) => {
	inputNum.push(line);
}).on('close', () => {
	inputArr = inputNum[0].split(' ').map((el) => parseInt(el));//[10, 5]
	count = inputArr[0];//10
	criet = inputArr[1];//5
	secondArr = inputNum[1].split(' ').map((el) => parseInt(el));
	for(let i=0; i<=secondArr.length; i++){
		if(secondArr[i]<criet){
			answer.push(secondArr[i]);
		};
	};
	console.log(answer.join(' '));
	process.exit();
});