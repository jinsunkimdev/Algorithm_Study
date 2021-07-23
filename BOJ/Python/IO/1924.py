#월과 일을 입력받고 그 때까지의 일 수를 7로 나눠서 1이면 월 ~ 0이면 일
month, day = map(int, input().strip().split())
#일 수의 총합
total_days = 0
def day_of_the_week_2007(add_days):
	if(add_days==1):
		print('MON')
	elif(add_days==2):
		print('TUE')
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
for i in range(1, month):
	if(i==1 or i==3 or i==5 or i==7 or i==8 or i==10 or i==12):
		total_days+=31
	elif(i==2):
		total_days+=28
	elif(i==4 or i==6 or i==9 or i==11):
		total_days+=30
answer = (total_days+day)%7
day_of_the_week_2007(answer)