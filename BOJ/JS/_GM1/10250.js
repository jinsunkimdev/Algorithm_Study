'use strict';
const readline = require('readline');
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let inputArr = [];
rl.on('line', (line) => {
	inputArr.push(line.trim());
}).on('close', () => {
	let testCnt = inputArr.shift();
	for(let i=0; i<testCnt; i++){
		let H = 0;
		let W = 0;
		let N = 0;
		let guestsArr = [];
		let guestsNumArr = [];
		for(let j=0; j<inputArr.length; j++){
		guestsArr = inputArr[i].split(' ');
		};
		guestsNumArr = guestsArr.map((string) => Number(string));
		/*H 호텔 층
		W 각 층 방 수
		N 몇 번째 손님 */
		H = guestsNumArr[0];
		W = guestsNumArr[1];
		N = guestsNumArr[2];
		let guestFloor = 0;
		let guestRoom = 0;
		guestFloor = N % H === 0 ? H : N % H;
		guestRoom = Number.isInteger(N / H) ? N / H : Math.ceil(N / H);
		let guestStrFloor = '';
		guestStrFloor = guestFloor.toString();
		let guestStrRoom = '';
		if(guestRoom<10) { 
			let strZero = '0';
			guestStrRoom = strZero.concat(guestRoom);
		}else guestStrRoom = guestRoom.toString();
		let answer = '';
		answer = guestStrFloor.concat(guestStrRoom);
		console.log(parseInt(answer));
	}
	process.exit();
});