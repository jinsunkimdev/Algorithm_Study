import sys
T = int(sys.stdin.readline())
for _ in range(1, T+1):
	answer = sum(map(int, sys.stdin.readline().split()))
	print(f'Case #{_}: {answer}')
