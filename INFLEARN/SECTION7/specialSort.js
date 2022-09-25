// Special Sort
/**
 * input
 * 8
 * 1 2 3 -3 -2 5 6 -6
 * output
 * -3 -2 -6 1 2 3 5 6
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let nArr = input[1].split(' ').map(x => Number(x))
	const solution = (arr) => {
		// Shallow Copy
		let answer = arr
		for(let i = 0; i < arr.length; i++)	
		{
			for(let j = 0; j < arr.length - i - 1; j++)
			{
				if(arr[j] > 0 && arr[j+1] < 0 )
				{
					[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
				}
			}
		}
		return answer
		// let answer
		// let pArr = []
		// let nArr = []
		// arr.forEach(x => {
		// 	if (x < 0) {
		// 		nArr.push(x)
		// 	} else {
		// 		pArr.push(x)
		// 	}
		// })
		// answer = nArr.concat(pArr)
		// return answer
	}
	console.log(solution(nArr))
})