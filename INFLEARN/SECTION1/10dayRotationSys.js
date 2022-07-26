// 10부제
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let T = +input.shift()
	let carArr = input[0].split(' ').map(Number)
	const solution = (carArr, T) => {
	let ans = 0
		for(let x of carArr)
		{
			if(x % 10 === T) ans+=1
		}
		return ans
	}
	console.log( solution(carArr, T) )
})