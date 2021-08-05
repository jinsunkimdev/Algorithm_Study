const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
rl.on('line', (line) => {
	rl.close();
}).on('close',()=>{
function selfNumber(){
let calculatedNum;
let array = [];
for(let n = 0; n < 10000; n++){
	if(0 < n && n < 10){ 
	calculatedNum = 2*n;
	}else if(10 <= n && n < 100){ 
	calculatedNum =  n + (Math.floor(n / 10)) + (n % 10);
	}else if(100 <= n && n < 1000){ 
	calculatedNum = n + (Math.floor(n / 100)) + (Math.floor((n % 100) / 10)) + (n % 10);
	}else if(1000 <= n && n < 10000){ 
	calculatedNum = n + (Math.floor(n / 1000)) + (Math.floor((n % 1000) / 100)) + (Math.floor((n % 100) / 10) ) + (n % 10);
	}else{ 
	calculatedNum = 10001;
	}
	array.push(calculatedNum);
}
for(let i = 1; i <= 10000; i++){
	if(!array.includes(i)){
	console.log(i);
	}
}
}
selfNumber();
process.exit()
});