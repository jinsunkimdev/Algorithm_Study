let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let [N, M] = input[0].split(' ').map(Number)
	let nArr = input[1].split(' ').map(Number)
	const solution = (m, arr) => {
		let answer = 0
		let sum = 0
		let lt = rt = 0
		for(let rt = 0; rt < arr.length; rt++)
		{
			sum += arr[rt]
			if(rt >= m - 1)
			{
				answer = Math.max(answer, sum)
				sum -= arr[lt++]
			}
		}
		return answer
		// let answer = 0
		// let sum = 0
		// let lt = rt = 0
		// for(let rt = 0; rt < arr.length; rt++)
		// {
		// 	sum += arr[rt]
		// 	while(sum > m)
		// 	{ 
		// 		sum -= arr[lt++]
		// 	}
		// 	answer += (rt - lt + 1)
		// 	console.log(rt, lt, answer)
		// }
		// return answer
	}
	console.log( solution(M, nArr) )
})