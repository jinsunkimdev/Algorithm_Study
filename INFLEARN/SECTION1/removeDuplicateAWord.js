// 중복단어 제거
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (arr) => {
		arr.shift()
		let answer;
		/* Set
		let setWord = new Set()
		for(let x of arr)
		{
			setWord.add(x)
		}
		setWord.forEach(v => answer.push(v))
		 */
		answer = arr.filter((v, i) => {
			return arr.indexOf(v) === i
		})
		return answer
	}
	console.log( solution(input) )
})
