input_num = int(input())

for i in range(input_num-1):
	print(' ' * (input_num-i-1), end='')
	print('*', end='')
	if i==0:
		print()
		continue
	print(' ' * (i*2-1), end='')
	print('*')
print('*'*(input_num*2-1))

