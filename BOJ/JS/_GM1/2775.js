// 부녀회장이 될 테야!
'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr = [];
rl.on('line', (line) => {
  inputArr.push(line);
}).on('close', () => {
  console.log(inputArr);
	process.exit();
});
