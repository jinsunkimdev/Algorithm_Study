// 회의실 배정
/*
 input 
5
1 4
2 3
3 5
4 6
5 7
output
3
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = Number( input.shift() )
	let start = []
	let end = []
	for(let x of input)
	{
		let tmp = x.split(' ').map(x => +x)
		start.push( tmp[0] )
		end.push( tmp[1] )
	}
	start.sort((a, b) => a - b)
	end.sort((a, b) => a - b)

	const solution = (s, e, n) => {
		let answer = []
		for(let i = 0; i < n; i++)
		{
			let cnt = 1
			let idx = i
			let j = i + 1 
			while(j < n)
			{
				if(e[idx] <= s[j])
				{
					cnt++
					idx = j
					j = j + 1	
				}
				else j = j + 1
			}
				answer.push(cnt)
		}
		return Math.max(...answer)
	}
	console.log(solution(start, end, N))
})