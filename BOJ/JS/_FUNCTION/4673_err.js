//셀프 넘버
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', (line) => {
	rl.close();
}).on('close', () => {
	let numArr = [];
	let createdNum = [];
	for(let i=1; i<=10000; i++){
		numArr.push(i);
		if(10<=i<100) createdNum.push(Math.floor(i+i%10+i/10));
		if(100<=i<1000) createdNum.push(Math.floor(i+i/100+(i%(i/100*100))/10+(i%(i/100*100))%10));
		if(1000<=i<10000){
			let thou = Math.floor(i/1000);
			let hund = Math.floor((i-(i/1000*1000))/100);
			let dozen = Math.floor((i-thou*1000-hund*100)/10);
			let unit = Math.floor((i-thou*1000-hund*100-dozen*10))
			createdNum.push(Math.floor(i+thou+hund+dozen+unit));
		};
		if(i===10000) createdNum.push(10001);
	}
	createdNum.push(2,4,6,8,10);
	
	for(let k=1; k<=numArr.length; k++){
		if(!createdNum.includes(k)){
			console.log(k)
		}
	}
	process.exit();
});
