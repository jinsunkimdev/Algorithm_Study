
let input = []
require('readline')
.createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = Number(input[0])
	const solution = (n) => {
		let answer = 0
		/**
		 * 1011
		 * 0자리는  2의 0승
		 * 1자리는 2곱 1
		 * 2자리는 ㅓㅏ
		 */
		const LF = (number) =>
		{ 
			let sum = 0
			let str = n.toString().split('').reverse()
			let L = str.length
			let cnt = 0
			while(cnt < L)
			{
				sum += ( Math.pow(2, cnt) * Number( str[cnt] ) )
				// console.log(Math.pow(2,cnt) * Number( str[2] ))
				cnt++
			}
			return sum
		}
		answer = LF(n)
		return answer
	}
	console.log( solution(N) )
})