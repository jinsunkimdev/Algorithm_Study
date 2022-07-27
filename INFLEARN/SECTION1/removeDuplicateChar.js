// 중복문자 제거
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer = ""
		/* Set
		let strSet = new Set()
		for(let x of str)
		{
			strSet.add(x)
		}
		strSet.forEach(v => answer += v)	
		 */
		for(let i = 0; i < str.length; i++)
		{
			if(str.indexOf(s[i]) === i) answer =+ s[i]
		}
		/** indexOf()
		 *	 
		 */
		return answer
	}
	console.log( solution(input[0]) )
})