/**
 * input (A(BC)D)EF(G(H)(IJ)K)LM(N)
 * ouput EFLM
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (input) => {
		input = input.split('')
		let answer = []
		let stack = []
		// for(let i = 0; i < input.length; i++)
		// {
		// 	if(input[i] === "(") stack.push("(")
		// 	else if(input[i] === ")") stack.pop()
		// 	else if(stack.length === 0) answer.push(input[i])
		// }
		// return answer.join('')

		for(let i = 0; i < input.length; i++)
		{
			if(input[i] === '(')
			{
				stack.push(input[i])
			}
			if(input[i] === ')')
			{
				stack.pop()
			}
			if(stack.length === 0 && input[i] !== ')') answer.push(input[i])
		}
		return answer.join('')
	}
	console.log( solution(input[0]) )
})