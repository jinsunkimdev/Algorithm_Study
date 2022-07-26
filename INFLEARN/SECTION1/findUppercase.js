// 대문자 찾기
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let str = input.shift()
	const solution = () => {
		let answer = 0
		for(let x of str)
		{
			if(x === x.toUpperCase()) answer++
		}

		return answer
	}
	console.log( solution() )
})
