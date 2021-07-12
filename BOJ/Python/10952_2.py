import sys
sum = []
while(True):
	A = sum(map(int, sys.stdin.readline().split()))
	if(A==0):
		break
	else:
		sum.append(A)
	for _ in range(len(sum)-1):
		print(A)