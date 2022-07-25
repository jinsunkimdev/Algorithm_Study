let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let T = input.shift()
	const solution = (T) => {
		let answer = 0
		let das = 12
		return answer = Math.ceil( T/12 )
	}
	console.log( solution(T) )
})