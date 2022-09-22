// Special Sort
/**
 * input
 * 8
 * output
 * 1 2 3 -3 -2 5 6 -6
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	let nArr = input[1].split(' ').map(x => Number(x))
	const solution = (arr) => {
		let answer
		for(let i = 0; i < arr.length -1; i++){
			let idx = i
			for(let j = i + 1; j < arr.length; j++){
				if(arr[idx] > arr[j]) idx = j
			}
			[arr[i], arr[idx]] = [arr[idx], arr[i]]
		}
		answer = arr
		return answer
	}
	console.log(solution(nArr))
})