const input = []
let numList = undefined
// String to Number
const strToNumArr = (str) => str.split(' ').map((numChar) => Number(numChar))
// Binary Search
const binarySearch = (num, startIndex, endIndex) => {
	// endIndex가 startIndex보다 작으면 false
	if(endIndex < startIndex) return false
	// endIndex가 startIndex와 같으면 
	if(endIndex === startIndex) return num === numList[startIndex]

	const pivotIndex = Math.floor((endIndex + startIndex) / 2)
	if(num === numList[pivotIndex]) return true
	else if(num > numList[pivotIndex])
		return binarySearch(num, pivotIndex + 1, endIndex)
	else if(num < numList[pivotIndex])
		return binarySearch(num, startIndex, pivotIndex - 1)
}
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
}).on('close', () => {
	//가지고 있는 숫자 카드들을 담을 배열의 가장 마지막 Index
	const numListFinalIndex = Number(input[0]) - 1
	// 오름차순으로 정렬
	numList = strToNumArr(input[1]).sort((a, b) => a - b)
	// 비교할 카드들의 배열
	const searchNumList = strToNumArr(input[3])

	// 답을 구하기
	const result = searchNumList.reduce((acc, curr) => 
	// 이진탐색해서 true면 1, false면 0반환
	(acc += `${binarySearch(curr, 0, numListFinalIndex) ? 1 : 0}`), '') 
	console.log(result)
})