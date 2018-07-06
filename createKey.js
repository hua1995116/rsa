const fs = require('fs');

const e = 17;
const k = 15;
let N = 0;
let L,d;

fs.readFile('ssl.txt','utf8', (err, data) => {
	if(err) {
		console.log(err);
	} else {
		data = data.split(',')
		N = parseInt(data[0]) * parseInt(data[1]);
		// console.log(N); // 66068209
		L = N - parseInt(data[0]) - parseInt(data[1]) + 1; 
		// console.log(L); // 66037104
		d = (L*k + 1) / e;
		// console.log(d); // 58268033
		fs.writeFile('publicKey', [N,e], err=> {
			if(err) {
				console.log(err);
			} else {
				console.log('publicKey success');
			}
		});
		fs.writeFile('previteKey', [N,d], err=> {
			if(err) {
				console.log(err);
			} else {
				console.log('previteKey success');
			}
		});
	}
})