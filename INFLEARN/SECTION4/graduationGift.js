// 졸업선물
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	// The number of students N, Budget M
	const [ N, M ] = input.shift().split(' ').map(v => +v)
	let costArr = []
	let delivArr = []
	for(let i = 0; i < input.length; i++)
	{
		input[i] = input[i].split(' ').map(Number)
		costArr.push(input[i][0])
		delivArr.push(input[i][1])
	}
		let answer
		let sumArr = []
		for(let i = 0; i < N; i++)
		{
			if(costArr[i] === Math.max(...costArr)) costArr[i] = ( Math.max(...costArr)) / 2 
		}
	    for(let i = 0; i < N; i++)
		{
			sumArr.push(costArr[i] + delivArr[i])
		}
		console.log(costArr, delivArr)
		console.log(sumArr)
		let cntArr = []
		let cnt = 0
		let sum = 0
		for(let i = 0; i < N - 1; i++)
		{
			sum = 0
			sum = sumArr[i] 
			cnt += 1
			for(let j = i+1; j < N; j++)
			{
				if(sum > M) 
				{ 
					cnt-=1 
					break 
				}
				if(sum < M)
				{
					sum += sumArr[j]
					cnt += 1
				}
			}
			cntArr.push(cnt)
			cnt = 0
		}
		answer = Math.max(...cntArr)
		console.log(answer)
})