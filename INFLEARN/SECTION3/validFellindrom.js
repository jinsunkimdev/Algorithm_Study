// 유효한 펠린드롬
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer = "YES"
		str = str.toLowerCase()
		let strArr = str.replace(/[^a-z]/g, '')		
		/**
		 * if(str.split('').reverse().join('') !== str) return "NO"
		 */
		for(let i = 0; i < Math.floor( strArr.length / 2); i++)
		{
			if(strArr[i] !== strArr[strArr.length - i - 1]) return "NO"
		}
		return answer
	}
	console.log( solution(input[0]) )
})