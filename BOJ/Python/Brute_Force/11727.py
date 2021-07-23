n = int(input())
n_arr = [0 for _ in range(n+1)]
n_arr = [ 0, 1, 3, 4]
if n<=1:
	print(n)
else:
	n_arr[2] = 3
	n_arr[3] = 4
	for i in range(4, n+1):
		n_arr[i] = n_arr[i-1] + n_arr[i-2]
	print(n_arr[i]%10007)
