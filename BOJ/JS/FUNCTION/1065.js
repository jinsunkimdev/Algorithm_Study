//an arithmetical progression
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let inputNum = 0;
rl.on('line', (line) => {
	inputNum = line;
}).on('close', () => {
	inputNum = Number(inputNum);
	let answer = 0;	
	for(let i=1; i<=inputNum; i++){
	let unit = 0;
	let dozen = 0;
	let hund = 0;
		if(i>0 && i<100){
			answer++;
		}
		else if(i>=100 && i<1000){
			hund = Math.floor(i/100);
			dozen = Math.floor((i-hund*100)/10); 
			unit = Math.floor(i%10);
			if((hund-dozen)==(dozen-unit)){
				answer++;
			}
		}
	};
	console.log(answer);
	process.exit();
});