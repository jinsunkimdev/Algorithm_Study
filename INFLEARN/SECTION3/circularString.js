// 회문 문자열
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		// let answer = "NO"
		// let tmp = str.toUpperCase()
		// let tmpStr = [...tmp].reverse().join("")
		// if(tmp === tmpStr) answer = "YES"
		// return answer
		let answer = "YES"
		str = str.toLowerCase()
		let len = str.length
		for(let i = 0; i < Math.floor(len/2); i++)
		{
			if(str[i] !== str[len - i - 1]) return "NO"
		}
		return answer
	}
	console.log( solution(input[0]) )
})