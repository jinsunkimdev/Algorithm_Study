let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const T = input.shift().split(' ').map(Number)
	const solution = (T) => {
		let answer = T[0]
		for(let i = 1; i < T.length; i++)
		{
			if(T[i] <= answer) answer = T[i]
		}
		return answer
	}
	console.log( solution(T) )
})