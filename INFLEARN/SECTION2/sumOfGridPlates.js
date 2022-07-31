// 격자판 최대합
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = input.shift()
	let gridArr = []
	for(let i = 0; i < input.length; i++)
	{
		gridArr.push(input[i].split(' ').map(Number))
	}
	const solution = (num, arr) => {
		let answer
		let rowArr = Array.from({length: num}, v => 0)
		// 최대 행
		let maxRow = 0
		let colArr = Array.from({length: num}, v => 0)
		// 최대 열
		let maxCol = 0
		// 대각선들의 합
		let diagnol1 = 0
		let diagnol2 = 0
		for(let i = 0; i < num; i++)
		{
			let tmp = 0	
			let tmp2 = 0
			diagnol1 += arr[i][i]
			diagnol2 += arr[i][( num - 1 ) - i]
			for(let j = 0; j < num; j++)
			{
				tmp += arr[i][j]
				tmp2 += arr[j][i]
			}
			rowArr[i] = tmp 
			colArr[i] = tmp2
			maxRow = Math.max(...rowArr)
			maxCol = Math.max(...colArr)
		}
		answer = [maxRow, maxCol, diagnol1, diagnol2]
		return Math.max( ...answer )
		// return answer
	}
	console.log( solution(N, gridArr) )
})