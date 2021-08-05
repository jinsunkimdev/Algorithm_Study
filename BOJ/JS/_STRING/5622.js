//다이얼
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputStr = '';
rl.on('line', (line) => {
	inputStr = line;
	rl.close();
}).on('close', () => {
	let inputStrArr = [];
	inputStrArr = inputStr.split('');
	let answer = 0;
	for(let i=0; i<inputStrArr.length; i++){
		if(inputStrArr[i]==='A'||inputStrArr[i]==='B'||inputStrArr[i]==='C'){
			answer += 3;
		}else if(inputStrArr[i]==='D'||inputStrArr[i]==='E'||inputStrArr[i]==='F'){
			answer += 4;
		}else if(inputStrArr[i]==='G'||inputStrArr[i]==='H'||inputStrArr[i]==='I'){
			answer += 5;
		}else if(inputStrArr[i]==='J'||inputStrArr[i]==='K'||inputStrArr[i]==='L'){
			answer += 6;
		}else if(inputStrArr[i]==='M'||inputStrArr[i]==='N'||inputStrArr[i]==='O'){
			answer += 7;
		}else if(inputStrArr[i]==='P'||inputStrArr[i]==='Q'||inputStrArr[i]==='R'||inputStrArr[i]==='S'){
			answer += 8;
		}else if(inputStrArr[i]==='T'||inputStrArr[i]==='U'||inputStrArr[i]==='V'){
			answer += 9;
		}else if(inputStrArr[i]==='W'||inputStrArr[i]==='X'||inputStrArr[i]==='Y'||inputStrArr[i]==='Z'){
			answer += 10;
		};
	};
	console.log(answer);
	process.exit();
});