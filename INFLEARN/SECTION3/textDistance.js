// 가장 짧은 문자거리
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let inputStr = input[0].split(' ')
	let s = inputStr[0]
	let c = inputStr[1]
	const solution = (str, char) => {
		let answer = []
		let p = 1000
		for(let x of str)
		{
			if(x === char) 
			{
				p = 0
				answer.push(p)
			}
			else
			{
				p++
				answer.push(p)
			}
		}
		p = 1000
		for(let i = str.length - 1; i >= 0; i--)
		{
			if(str[i] === char) p = 0
			else
			{
				p++
				answer[i] = Math.min(answer[i], p)
			}
		}
		return answer 
	}
	console.log( solution(s, c) )
})