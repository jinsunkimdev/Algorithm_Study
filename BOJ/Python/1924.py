import sys
month, day = map(int, sys.stdin.readline().split())
end_day = 0
add_days = 0
def calculate_2007(add_days):
	if(add_days==1):
		print('MON')
	elif(add_days==2):
		print('Tue')
	elif(add_days==3):
		print('WED')
	elif(add_days==4):
		print('THU')
	elif(add_days==5):
		print('FRI')
	elif(add_days==6):
		print('SAT')
	elif(add_days==0):
		print('SUN')
if(month==1,3,5,7,8,10,12):
	end_day=31
	add_days = end_day+day
	print(add_days)
	answer = add_days%7
	print(month, day)
	print(answer)
	calculate_2007(add_days = add_days%7)
elif(month==2):
	end_day=28
	add_days = end_day+day
	calculate_2007(add_days%7)
elif(month==4,6,9,11):
	end_day=30
	add_days = end_day+day
	calculate_2007(add_days%7)
else:
	print("error: 1~12사이의 숫자를 입력해주세요")