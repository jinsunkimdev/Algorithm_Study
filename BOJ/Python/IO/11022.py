import sys
T = int(sys.stdin.readline())
for _ in range(1, T+1):
	A, B = map(int, sys.stdin.readline().split())
	answer = A + B
	print(f'Case #{_}: {A} + {B} = {answer}')