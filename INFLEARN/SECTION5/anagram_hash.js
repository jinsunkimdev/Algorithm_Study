/*
input:
AbaAeCe
baeeACA
output: YES
*/
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const arrA = input.shift().split('')
	const arrB = input.shift().split('')
	const solution = (A, B) => {
		let answer
		const aMap = new Map()
		const aSet = new Set()
		const bMap = new Map()
		const bSet = new Set()
		A.sort()
		B.sort()
		A.forEach(e => aSet.add(e))
		B.forEach(e => bSet.add(e))
		aSet.forEach(e => {
			aMap.set(e, 0)
		})
		bSet.forEach(e => {
			bMap.set(e, 0)
		})
		A.forEach(e => {
			if(aMap.has(e)) aMap.set(e, aMap.get(e) + 1)
		})
		B.forEach(e => {
			if(bMap.has(e)) bMap.set(e, bMap.get(e) + 1)
		})
		for(let x of aMap)
		{
			if(!bMap.has(x[0]) || bMap.get(x[0]) !== x[1])
			{
				return "NO"
			} else return "YES"
		}
		/*
		  Using Map(Hash) Only
		  let answer = "YES"
		  let sH = new Map()
		  for(let x of str1)
		  {
			if(sH.has(x)) sH.set(x, sH.get(x) + 1)
			else sH.set(x, 1)
		  }
		  for(let x of str2)
		  {
			if(!sH.has(x) || sH.get(x) === 0) return "NO"
			sH.set(x, sH.get(x) - 1)
		  }
		  return answer
		 */
	}
	console.log( solution(arrA, arrB) )
})