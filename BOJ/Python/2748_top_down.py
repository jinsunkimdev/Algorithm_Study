def fib_2748(n):
	if n == 0:
		return 0
	elif n == 1:
		return 1
	else:
		return fib_2748(n-1) + fib_2748(n-2)

def solve():
	n = int(input())
	print(fib_2748(n))

solve()
