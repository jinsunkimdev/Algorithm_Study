import math
# f(n) = 1 + min(f(n/3), f(n/2), f(n-1))
def solve():
	n = int(input())
	n_arr = [0, 0, 1, 1, 2]
	for i in range(5, n+1):
		one, two, three = math.inf, math.inf, n_arr[i-1]
		if i%3 == 0:
			one = n_arr[i//3]
		if i%2 == 0:
			two = n_arr[i//2]
		n_arr.append(1 + min(one, two, three))
	print(n_arr[n])
solve()