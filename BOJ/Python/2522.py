input_num = int(input())
for i in range(1, (input_num*2-1)+1):
	if(i<=input_num):
		print(" "*(input_num-i)+"*"*i)
	elif(i>input_num):
		print(" "*(i-input_num)+"*"*(input_num-(i-input_num)))