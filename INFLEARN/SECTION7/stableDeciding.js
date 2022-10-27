/* input
5 3
1 2 8 4 9
   output
3
*/
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	const [N, C] = input[0].split(' ').map(x => +x)
	let nArr = input[1].split(' ').map(x => +x)
	const count = (arr, mid) => {
		let cnt = 1, ep = arr[0]
		for(let i = 1; i < arr.length; i++)
		{
			if(arr[i] - ep >= mid)
			{
				cnt++
				ep = arr[i]
			}
		}
		return cnt
	}
	const solution = (c, arr) => {
		let answer
		let tmp = arr.sort((a, b) => a - b)
		// [1, 2, 4, 8, 9]
		let lt = 	1
		let rt = arr[arr.length - 1]
		while(lt <= rt)
		{
			let mid = Math.floor((lt + rt) / 2)
			if(count(arr, mid) >= c)
			{
				answer = mid
				lt = mid + 1
			}
			else rt = mid - 1
		}
		return answer
	}
	console.log(solution(C, nArr))
})