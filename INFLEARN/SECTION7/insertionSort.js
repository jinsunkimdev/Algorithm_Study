/*N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 삽입정렬입니다.*
 * input 
6
11 7 5 6 10 9
* ouput
5 6 7 9 10 11
 */
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	const nArr = input[1].split(' ').map(x => Number(x))
	const solution = (arr) => {
		let answer = arr
			for(let i = 0; i < arr.length; i++)
			{
				let tmp = arr[i]
				for(j = i - 1; j >= 0; j--)
				{
					if(arr[j] > tmp) arr[j+1] = arr[j]
					else break
				}
				arr[j+1] = tmp
			}
		// for(let i = 1; i < arr.length; i++)
		// {
		// 	for(let j = 0; j < i; j++)
		// 	{
		// 		if(arr[j] > arr[i])
		// 		{
		// 			[arr[i], arr[j]] = [arr[j], arr[i]]
		// 		}
		// 	}
		// }
		return answer
	}
	console.log(solution(nArr))
})