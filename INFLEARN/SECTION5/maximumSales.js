// 최대 매출
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const [N, K] = input.shift().split(' ').map(Number)
	let nArr = input.shift().split(' ').map(Number)
	const solution = (k, arr) => {
		// let answer = []
		// for(let i = 0; i < arr.length - (k-1); i++)
		// {
		// 	let rt = i
		// 	let lt = 0
		// 	let sum = 0
		// 	while(lt < k)
		// 	{
		// 		sum += arr[rt++]
		// 		lt++
		// 	}
		// 		answer.push(sum)
		// }
		// return Math.max(...answer)
		/**
		 * Sliding Window
		 */
		let answer, sum = 0
		for(let i = 0; i < K; i++) sum += arr[i]
		answer = sum
		for(let i = k; i < arr.length; i++)
		{
			sum += (arr[i] - arr[i-k])
			answer = Math.max(answer, sum)
		}
		return answer
	}
	console.log( solution(K, nArr))
})