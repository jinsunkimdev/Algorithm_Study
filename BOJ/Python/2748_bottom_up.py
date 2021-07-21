n = int(input())
n_arr = [0,1]
for i in range(2, n+1):
	fib_value = n_arr[-1]+n_arr[-2]
	n_arr.append(fib_value)
print(n_arr[-1])