// 부녀회장이 될테야
'use strict'
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr = [];
//k-층,n-호
//1~k층 (k층 n호에는 k-1층 n호+k층 n-1호만큼 산다.)
rl.on('line', (line) => {
	inputArr.push(line);
}).on('close', () => {
	let inputNum = inputArr.map((el) => Number(el));
	let testCount = Number(inputNum.shift());
	let k = [];
	let n = [];
		for(let i=0; i<testCount; i++){
			k.push(inputNum.shift());
			n.push(inputNum.shift());
	}
	//각 방당 인원수를 저장할 2차원 배열
	const house = Array.from(Array(k.length+1), () => Array(n.length+1).fill(0));
	//0층에 사는 인원 구하기
	for(let i=0; i<n.length; i++){
		house[0][i] = i;
		};
	//1~k층(k층 n호에는 k-1층 n호 + k층 n-1호만큼)
	for(let i=0; i<k.length; i++){
		for(let j=0; j<n.length; j++){
			house[i][j] = house[i-1][j] + house[i][j-1];
		}
	};
	//정답 출력
	for(let i=0; i<testCount; i++){
	console.log(house[k[i]][n[i]]);
	};		
	process.exit();
});







