let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const T = input.shift()
	const solution = (T) => {
		let answer = 0
		for(let i = 1; i <= T; i++ )
		{
			answer += i
		}
		return answer
	}
	console.log( solution(T) )
})