// 올바른 괄호
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
		let answer = "YES"
		let iArr = input.split('')
		let stack = []
	for(let i = 0; i < iArr.length; i++)
	{

		if(iArr[i] === '(') stack.push(iArr[i])
		else if(iArr[i] === ')')
		{
			if(stack.length === 0)
			{
				answer = "NO"
				break
			}
			else stack.pop()
		}
	}
	if(stack.length > 0) answer = "NO"
		return answer
	}
	console.log( solution(input[0]) )
})
	// 	const leftP = new Map()
	// 	leftP.set("(", 1)
	// 	const rigthP = new Map()
	// 	rigthP.set(")", 1)
	// 	iArr.forEach(x => {
	// 		if(x === "(") leftP.set("(", leftP.get("(") + 1)
	// 		if(x === ")") rigthP.set(")", rigthP.get(")") + 1)
	// 	})

	// 	if(iArr[0] === ")") answer = "NO"
	// 	if(leftP.get("(") === rigthP.get("(")) answer = "YES"
	// 	else answer = "NO"
	// 	return answer