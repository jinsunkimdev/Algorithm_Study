// 대칭 차집합
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', line => {
	input.push(line)
})
.on('close', () => {
	input.shift()
	const A = new Set()
	const aElement = input[0].split(" ")
	aElement.forEach(v => A.add(v))
	const B = new Set()
	const bElement = input[1].split(" ")
	bElement.forEach(v => B.add(v))
	let count = 0
	A.forEach(v => {
		if(!B.has(v)){
			count = count + 1
	}
	})
	B.forEach(v => {
		if(!A.has(v)){
			count = count + 1
	}
	})
	console.log(count)
})
/**
 * 
let over = A.length+B.length-new Set(A.concat(B)).size
console.log((A.length-over)+(B.length-over))
 */