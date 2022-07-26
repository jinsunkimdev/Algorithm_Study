// 문자 찾기
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let str = input.shift()
	const T = input.shift()
	const solution = (str, T) => {
		let ans = 0
		for(let x of str)
		{
			if(x === T) ans += 1
		}
		return ans
	}
	console.log( solution(str, T) )
})
