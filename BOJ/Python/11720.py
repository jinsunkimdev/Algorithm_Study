import sys
T = input()
input_number = sys.stdin.readline().strip()
#print(f'first_input_n:{input_number}')
input_number = list(input_number)
#print(f'seconde_input_n:{input_number}')
input_sum = 0
for i in range(len(input_number)):
	input_sum += int(input_number[i])
print(input_sum)