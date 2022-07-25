let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (a, b, c) => {
		let answer
		if(a <= b) answer = a
		else answer = b
		if(c <= b) answer = c
		return answer 

		// if(b <= a && b <= c)  return b 
		// if(a <= b && a <= c) return a
		// if(c <= a && c <= b) return c
	}
	const T = input[0].split(' ').map(Number)
	console.log( solution(T[0], T[1], T[2]) )
})