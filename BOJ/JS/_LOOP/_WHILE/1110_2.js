const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})
rl.on('line', (line) => {
	input=line
	rl.close()
}).on('close', () => {
	if(input<10) input = "0"+input
	let inp = input.split('')
	let sum = Number.MIN_SAFE_INTEGER, i=0;
	while(sum!=input) {
		let inps = String(inp[0]*1+inp[1]*1)
		sum = inp[1] + inps[inps.length-1]
		inp = sum.split('')
		i++
	}
console.log(i)
process.exit();
});