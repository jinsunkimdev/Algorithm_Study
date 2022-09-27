// 캐시 문제
/**
 * 
 * input
 * 5 9
1 2 3 2 6 2 3 5 7
캐시 메모리 상태 변화
1 0 0 0 0
2 1 0 0 0 
3 2 1 0 0 
2 3 1 0 0 
6 2 3 1 0 
2 6 3 1 0 
3 2 6 1 0 
5 3 2 6 1 
7 5 3 2 6
 * output
7 5 3 2 6
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	const [S, N] = input[0].split(' ').map(x => +x)
	let nArr = input[1].split(' ').map(x => Number(x))
	const solution = (s, arr) => {
		let answer = []
		let cache = Array.from({length: s}, () => 0)
		// 캐시의 길이가 s보다 작으면 그냥 넣기
		// 캐시의 길이가 s보다 크면 맨 앞에 있는 캐시를 삭제
		// 캐시의 길이가 s보다 작으면 그냥 넣기
		// cache = [0, 0, 0, 0, 0]
		for(let x of arr)// x => 1, 2, 3, 2, 6, 2, 3, 5, 7
		{
			let pos = -1
			// 캐시에 있는지 확인
			// s = 5
			for(let i = 0; i < s; i++)
			{
				if(x === cache[i]) pos = i
			}
			// pos => -1, 0, 1, 0, -1, 0, 1, -1, -1
			// 없으면 캐시의 맨 뒤에 넣고 맨 앞에 있는 캐시를 삭제
			if(pos === -1)
			{
				for(let i = s - 1; i >= 1; i--)
				// i => 4, 3, 2, 1, 0
				{
					cache[i] = cache[i - 1]
				}
				// cache => [0, 0, 0, 0, 0]
			}
			// 있으면 캐시의 위치를 앞으로
			else
			{
				for(let i = pos; i >= 1; i--)
				{
					cache[i] = cache[i - 1]
				}
			}
			cache[0] = x
			answer = cache[N-1]
			console.log(cache.join(' '))
		}
		return answer
	}
	console.log(solution(S, nArr))
})