//대문자로 통일
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer = ""
		answer = str.toUpperCase()
		for(let x of str)
		{
		// 	if(x === x.toLowerCase()) answer += x.toUpperCase()
		// 	else answer += x

		/** ASCII NUMBER
		 * let num = x.charCodeAt()
		 * if(num >= 97 && num >=122 ) answer += String.fromCharCode(num - 32)
		 * else answer += x
		 */
		}
	}
	console.log( solution(input[0]) )
})