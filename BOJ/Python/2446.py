input_num = int(input())
for i in range(input_num):
	print(' ' * i + '*' * (2 * (input_num - i) - 1))
for j in range(1, input_num):
	print(' ' * (input_num - j - 1) + '*' * (2 * j + 1))