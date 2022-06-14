let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let firstInput = input.shift()
	const [N, M] = firstInput.split(' ').map(str => Number(str))
	const pocketmonInfo = input.slice(0, N)
	const pocketBook = new Map(pocketmonInfo .map((v, i) => [v, i+1]))
	const question = input.slice(N, M+N)
	const answer = []
	question.forEach(v => 
		{
			if(Number.isNaN(+v)) answer.push(pocketBook.get(v))
			else answer.push(pocketmonInfo[+v-1])
		})
		console.log(answer.join('\n'))
})