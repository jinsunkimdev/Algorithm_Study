let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => 
	input.push(line.trim())
).on('close',() => {
	let inputArr = []
	 for(let i = 0; i < input[0].length; i++)
	{
		inputArr.push(input[0][i])
	}
	inputArr.sort((a, b) => b - a)
	console.log(inputArr.join(''))
	/**
	 * 더 좋은 답
	 * const result = input[0].split("").sort((a, b) => b - a)
	 * console.log(result.join(""))
	 */
})