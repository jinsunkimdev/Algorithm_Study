// 이분검색
/**
 * input
 * 8 32
   23 87 65 12 57 32 99 81
   ouput
   3
 */
let input = []

test.push(require('readline').createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line.trim())
  })
  .on('close', () => {
    const [N, M] = input[0].split(' ').map(x => +x)
    let arr = input[1].split(' ').map(x => +x)
    arr.sort((a, b) => a - b)
    const solution = (arr, target, n) => {
      let answer = 0
      let lt = 0
      let rt = n - 1
      while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2)
        if (arr[mid] === target) {
          answer = mid + 1
          break
        }
        else if (arr[mid] > target) rt = mid - 1
        else lt = mid + 1
      }
      return answer
    }
    console.log(solution(arr, M, N))
  }))
