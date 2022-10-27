// input 9 3 
//       1 2 3 4 5 6 7 8 9


// output 17
let input = []
require('readline').createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line.trim())
  })
  .on('close', () => {
    const count = (songs, capacity) => {
      let sum = 0
      let cnt = 1
      for(let x of nArr)
      {
        if(sum + x > capacity)
        {
          cnt++
          sum = x
        }
        else sum += x
      }
      return cnt
    }
    const solution = (m, arr) => {
      let answer
      let lt = Math.max(...arr)
      let rt = arr.reduce((a, b) => a + b, 0)
      while(lt <= rt)
      {
        let mid = Math.floor((lt + rt) / 2)
        if(count(arr, mid) <= m)
        {
          answer = mid
          rt = mid - 1
        }
        else 
        {
          lt = mid + 1
        }
      }
      return answer
    }
    console.log(solution(M, nArr))
  })
