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
		let strArr = []
		for(let x of arr)
		{
			strArr.push(x.toString().split('').reverse().join(''))
		}
		for(let x of strArr)
		{
			if(isPrime(+x)) answer.push(+x)
		}
		return answer
	}
	console.log( solution(nArr) )
})
