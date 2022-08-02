// 문자열 압축
let input = []
require('readline').createInterface(process.stdin, process.stdout)
.on('line', (line) => {
	input.push(line.trim())
})
.on('close', () => {
	const solution = (str) => {
		let answer = []
		const sSet = new Set()
		for(let x of str)
		{
			sSet.add(x)
		}
		const sMap = new Map()
		sSet.forEach(v => {
			sMap.set(v, 0)
		})
		for(let x of str)
		{
			if(sMap.has(x)) sMap.set(x, sMap.get(x) + 1)
		}
		for(let [keys, values] of sMap)	
		{
			answer.push(keys)
			if(values !== 1)answer.push(values)
		}
		answer = answer.join('')
		/**
		 * let answer = ""
		 * let cnt = 1
		 * str = str + " "
		 * for(let i = 0; i < str.length - 1; i++)
		 * {
		 * 	if(s[i] === s[i+1]) cnt++
		 * 	else{
		 * 		answer += s[i]
		 * 		if(cnt > 1) answer += String(cnt)
		 * 		cnt = 1
		 *  }
		 * }
		 */
		return answer
	}
	console.log( solution(input[0]) )
})