// k번째로 큰 수
/**
 * input 
10 3
13 15 34 23 45 65 33 11 26 42
output 
143
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (input) => {
		let answer
		const [N, K] = input.shift().split(' ').map(Number)
		let numArr = input[0].split(' ').map(Number)
		const sumSet = new Set()
		for(let i = 0; i < N; i++)
		{
			for(let j = i + 1; j < N; j++)
			{
				for(let k = j + 1; k < N; k++)
				{
					sumSet.add(numArr[i] + numArr[j] + numArr[k])
				}
			}
		}
		let ansArr = Array.from(sumSet).sort((a, b) => b - a)
		return answer = ansArr[K - 1]
		// return answer
	}
	console.log( solution(input) )
})
