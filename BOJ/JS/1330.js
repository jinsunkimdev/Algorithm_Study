import readline from 'readline';
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("How old are you?", (answer) => {
	console.log(`I'm ${answer} years old`);
	rl.close();
})
