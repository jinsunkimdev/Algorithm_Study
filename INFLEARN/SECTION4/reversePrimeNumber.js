// 뒤집은 소수
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = input.shift()
	let nArr = input.shift().split(' ').map(v => +v)
	const isPrime = (n) => {
		if(n <= 1) return false
		if(n % 2 === 0) return n === 2 ? true : false
		for(let i = 3; i <= Math.sqrt(n); i += 2)
		{
			if(n % i === 0) return false
		}
		return true
	}
	const solution = (arr) => {
		let answer = []
		for(let x of arr)
		{
			let tmp = 0
			// get reverse string
			tmp = parseInt(x.toString().split('').reverse().join(''))
			/**
			 * let res = 0
			 * while(x) 
			 * {
			 *	let t = x % 10
				res = res * 10 + t
				x = parseInt(x / 10)
			 * }
			 */
			if(isPrime(tmp)) answer.push(tmp)
		}
		return answer
	}
	console.log( solution(nArr) )
})
