// 공주 구하기
/**
 * input 
 * 8 3
 * ouput
 * 7
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	let [N, K] = input[0].split(' ').map(Number)
	const solution = (n, k) => {
		let answer
		// v => 왕자들의 번호를 담은 배열
		// i => 왕자들의 번호를 담은 배열의 인덱스
		let queue = Array.from({length: n}, (v, i) => i + 1)
		while (queue.length > 1) {
			for (let i = 1; i < k; i++) queue.push(queue.shift())
			queue.shift()
		}
		/**
		 * queue.length === 1
		 * queue[0] === 7
		 * answer = 7
		 */
		answer = queue.shift()
		return answer
	}
	console.log( solution(N,K) )
})