//OX퀴즈
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let inputNum = 0;
let inputArr = [];
rl.on('line',(line) => {
	inputArr.push(line);
}).on('close',() => {
	inputNum = Number(inputArr[0]);
	for(let i=1; i<=inputNum; i++){
		let count = 0;
		let sum = 0;
		const result = inputArr[i].split('');
		for(let j=0; j<result.length; j++){
			if(result[j]==='O'){
				sum += 1+count;
				count++;
			}else{
				count=0;
			};	
		};
		console.log(sum);
	};
	process.exit();
});