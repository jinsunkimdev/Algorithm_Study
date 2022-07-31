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
		let dx = [1, 0, -1, 0]
		let dy = [0, 1, 0, -1]
		for(let i = 0; i < n; i++)
		{
			for(let j = 0; j < n; j++)
			{
				let flag = 1
				for(let k = 0; k < 4; k++)
				{
					let nx = i + dx[k]
					let ny = j + dy[k]
					if(nx >= 0 && nx < n && ny < n && arr[nx][ny] >= arr[i][j])
					{
						flag = 0
						break
					}
				}
				if(flag) answer++
			}
		}
		return answer
	}
	console.log( solution(N, peakArr) )
})
