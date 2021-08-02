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
	for(let i=1; i<=totalGrade; i++){
		let sum = 0;
		let count = 0;
		let test = inputArr[i].split(' ').map(el => Number(el));
		console.log(test);
		for(let j=1; j<=test[0]; j++){
			sum += test[j];
		};
		let avg = sum / test[0];
		for(let j=1; j<=test[0]; j++){
			if(test[j]>avg){
				count++;
			};
		};
	console.log((count/test[0]*100).toFixed(3)+"%");
	};
	process.exit();
});