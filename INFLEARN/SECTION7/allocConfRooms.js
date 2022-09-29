// 회의실 배정
/*
 input 
5
1 4
2 3
3 5
4 6
5 7
output
3
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const n = Number( input.shift() )
	let start = []
	let end = []
	for(let x of input)
	{
		let tmp = x.split(' ').map(x => +x)
		start.push( tmp[0] )
		end.push( tmp[1] )
	}

	const solution = (s, e) => {
		let answer
		return answer
	}
	console.log(solution(start, end))
})