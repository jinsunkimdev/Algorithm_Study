input_num = int(input())
answer = 0
count = 0
if(input_num==1):
	print(input_num)
elif(input_num%3==0):
	answer = input_num//3
	count+=1
	if(answer==1):
		print(count)
	else:
		while(True):
			if(answer==1):
				print(count)
				break
			elif(answer%3==0):
				answer = answer//3
				count+=1
			elif(answer%2==0):
				answer = answer//2
				count+=1
			else:
				answer = answer-1
				count+=1
elif(input_num%2==0):
	answer = input_num//2
	count = count+1
	if(answer==1):
		print(count)
	else:
		while(True):
			if(answer==1):
				print(count)
				break
			elif(answer%3==0):
				answer = answer//3
				count+=1
			elif(answer%2==0):
				answer = answer//2
				count+=1
			else:
				answer = answer-1
				count+=1
else:
	answer = input_num-1
	count+=1
	if(answer==1):
		print(count)
	else:
		while(True):
			if(answer==1):
				print(count)
				break
			elif(answer%3==0):
				answer = answer//3
				count+=1
				if(answer==1):
					print(count)
					break
			elif(answer%2==0):
				answer = answer//2
				count+=1
				if(answer==1):
					print(count)
					break
			else:
				answer = answer-1
				count+=1
				if(answer==1):
					print(count)
					break
