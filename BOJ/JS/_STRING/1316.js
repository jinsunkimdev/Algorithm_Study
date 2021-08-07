//그룹 체커
/* 3
happy
new
year */
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr= [];
rl.on('line', (line) => {
	inputArr.push(line.trim());
}).on('close', () => {
	let count = parseInt(inputArr.shift());
	let answer = count;
	for(let i=0; i<count; i++){
		const charMap = {};
		for(let j=0; j<inputArr[i].length; j++){
			if(!charMap[inputArr[i][j]]){
				charMap[inputArr[i][j]] = true;
			}else if(inputArr[i][j] !== inputArr[i][j-1]){
				answer--;
				break;
			}
			console.log(charMap);
		}
	}
	console.log(answer);
	process.exit();
});