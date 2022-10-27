let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = () => {
		let answer
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
		nArr.sort((a, b) => a - b)
		let lt = 1
		let rt = nArr[nArr.length - 1]
		while(lt <= rt)
		{
			let mid = parseInt((lt + rt) / 2)
			if(count(nArr, mid) >= C)
			{
				answer = mid
				lt = mid + 1
			}
			else rt = mid - 1
		}
		return answer
	}
	console.log( solution() )
})