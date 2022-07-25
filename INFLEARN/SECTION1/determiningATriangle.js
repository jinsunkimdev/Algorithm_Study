let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const T = input.shift().split(' ').map(Number)
	const solution = (T) => {
		let answer = 'YES'
		let max = 0
		let sum = T[0] + T[1] + T[2]
		if(T[0] >= T[1]) max = T[0]
		else max = T[1]
		if(T[2] >= max) max = T[2]
		
		if(( sum - max ) > max) return answer
		else return 'NO'
	}
	console.log(solution(T))
})