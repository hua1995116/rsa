const fs = require('fs');
const quick = require('./quick.js');

fs.readFile('previteKey', 'utf8', (err, data) => {
	if(err) {
		console.log(err);
	} else {
		data = data.split(',');
		N = data[0];
		d = data[1];

		fs.readFile('encrypt.txt', 'utf8', (err, list) => {
			list = list.split(',');
			const decodeList = RSAtoArr(N, d, list);
			// console.log(decodeList);
			const str = [];
			for(let i = 0; i < decodeList.length; i++) {
				str.push(String.fromCharCode(decodeList[i]));
			}
			console.log(str.join(''));
		})
	}
});


function RSAtoArr(N, d, data) {
	const arr = [];
	for(let i = 0; i < data.length; i++) {
		arr.push(quick(data[i], d, N));
	}
	return arr;
} 
