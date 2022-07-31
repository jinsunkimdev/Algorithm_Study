// 봉우리
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = input.shift()
	let peakArr = []
	for(let i = 0; i < N; i++)
	{
		peakArr.push(input[i].split(' ').map(Number))
	}
	const solution = (n, arr) => {
		let answer = 0
		for(let i = 0; i < n; i++)
		{
			for(let j = 0; j < N; j++)
			{
				if(i === 0)
				{
					
				}
			}
		}
		return answer
	}
	console.log( solution(N, peakArr) )
})
