input_num = int(input())
for i in range(1,input_num*2):
	if(i<=input_num):
		print(" "*i+"*"*(input_num-i)+"*"*(input_num-i-1))
	if(i>input_num):
		print(" "*(input_num-(i-input_num+1))+"*"*(i-input_num+1)+"*"*(i-input_num))