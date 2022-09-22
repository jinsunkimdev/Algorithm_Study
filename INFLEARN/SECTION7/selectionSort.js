// 선택 정렬
/**
 * input 
 * 6
 * 13 5 11 7 23 15
 * output
 * 5 7 11 13 15 23
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let nArr = input[1].split(' ').map(x => Number(x))
	// const solution = (arr) => {
	// 	let answer = arr
	// 	for (let i = 0; i < answer.length - 1; i++) {
	// 		let idx = i
	// 		for (let j = i + 1; j < answer.length; j++) {
	// 			if (answer[j] < answer[idx]) idx = j
	// 		}
	// 		[answer[i], answer[idx]] = [answer[idx], answer[i]]
	// 	}
	// 	return answer
	// }
	// console.log( solution(nArr).join(' ') )
	// })
	const solution = (arr) => {
		let answer
		for(let i = 0; i < arr.length; i++)
		{
			for(let j = i + 1; j < arr.length; j++)
			{
				if(arr[i] > arr[j])
				{
					let temp 
					temp = arr[i]
					arr[i] = arr[j]
					arr[j] = temp 
				}
			}
		}
		answer = arr
		return answer
	}
		console.log(solution(nArr))
	})


