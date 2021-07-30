const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputNum = 0;
let inputNum2 = 0;
let sum = 0;
let count = 0;
rl.on('line', (line) => {
	inputNum = Number(line);
	rl.close();
}).on('close', () => {
	inputNum2 = inputNum;
	while(true){
		count++;
		sum = Math.floor(inputNum2/10) + inputNum2%10;
		inputNum2 = (inputNum2%10)*10 + sum%10;
		if(inputNum===inputNum2) break;
	};
	console.log(count);
	process.exit();
});
