import sys
for num in sys.stdin:
	try:
		print(sum(map(int, num)))
	except:
		break