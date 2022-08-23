/**
 * input : 15
 * output : BACBACCACCBDEDE
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = Number( input.shift() )
	let nArr = input.shift().split('')
	const solution = (n, arr) => {
		let answer = Number.MIN_SAFE_INTEGER
		const student = ['A', 'B', 'C', 'D', 'E']
		const ht = new Map()
		student.forEach(e => {
			ht.set(e, 0)
		})
		for(let e of arr)
		{
			if(ht.has(e)) ht.set(e, ht.get(e)+1)
		}
		for(let e of ht.keys())
		{
			if( ht.get(e) >= answer ) answer = ht.get(e)
		}
		for(let [key, value] of ht.entries())
		{
			if(value === answer) answer = key
		}
		return answer
	}
	console.log( solution(N, nArr) )
})
