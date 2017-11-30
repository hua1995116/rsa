var fs = require('fs');

var data = [];

function createPrimeNumber() {
	var key = 1;
	var num = 0;
	while(key > 0) {
		var n = parseInt(Math.random()*100000);
		// var n = 7;
		for(var i = 1; i < n; i++) {
			if (n % i === 0 && i!== 1 && i !== n) {
				break;
			}
		}
		if(i === n) {
			key = -1;
			num = n;
		}
	}
	return num;
}

data.push(createPrimeNumber());
data.push(createPrimeNumber());


fs.writeFile('ssl.txt', data ,err => {
	if(err) {
		console.log(err);
	} else {
		console.log('success')
	}
})
