// 일곱 난쟁이
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let arr = input[0].split(' ').map(Number)
	const solution = (arr) => {
		let sum = arr.reduce((a, b) => a + b, 0)	
		for(let i = 0; i < 8; i++)
		{
			for(let j = i + 1; j < 9; j++)
			{
				if( sum - ( arr[i] + arr[j] ) === 100 )
				{
					arr.splice(j, 1)
					arr.splice(i, 1)
				}
			}
		}
		return arr
	}
	console.log( solution(arr) )
})