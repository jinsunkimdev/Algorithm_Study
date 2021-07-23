# 타일링2
n = int(input())
n_arr = [0 for _ in range(n+1)]
if n <= 3:
	print(n)
else:
	n_arr[1]=1
	n_arr[2]=2
	for i in range(3, n+1):
		n_arr[i] = n_arr[i-1]+n_arr[i-2]
	print(n_arr[i]%10007)