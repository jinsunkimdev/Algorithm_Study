input_num = int(input())
for i in range(1, input_num+1):
	print("*"*i+(" "*(input_num-i)*2)+"*"*i)
for j in range(1, input_num):
	print("*"*(input_num-j)+((" "*j)*2)+("*"*(input_num-j)))