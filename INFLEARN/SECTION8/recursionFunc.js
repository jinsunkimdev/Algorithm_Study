let input = []
require('readline')
.createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const N = Number( input[0] )
	// const solution = (n) => {
	// 	let answer
	// 	let cnt = 1
	// 	while(cnt < n + 1)
	// 	{
	// 		answer.push(cnt)	
	// 		cnt++
	// 	}
	// 	return answer
	// }
	const solution = (n) => {
		const DFS = (L) => {
			if(L==0) return
			else{
				DFS(L - 1)
				console.log(L)
			}
		}
		DFS(n)
	}
	console.log( solution(N) )
})