// 올바른 괄호

const { type } = require('os')

/**
 * input
 * (()(()))(()
 * ouput
 * NO
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (input) => {
		let answer
		const leftP = new Map()
		const rigthP = new Map()
		input.forEach(x => {
			if(x === "(") 
			{
				leftP.set("(")
			}
		})
		// return answer
	}
	console.log( solution(input[0]) )
})