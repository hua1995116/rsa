const fs = require('fs');
const quick = require('./quick');

fs.readFile('publicKey', 'utf8', (err, data) => {
	data = data.split(',');
	const N = data[0];
	const e = data[1];
	const str = '加密技术加密技术是对信息进行编码和解码的技术,编码是把原来可读信息(又称明文)译成代码形式(又称密文)';
	const unicodeList = strToUnicode(str);

	const encryptList = arrToRSA(N, e ,unicodeList); 

	fs.writeFile('encrypt.txt', encryptList, err=> {
		if(err) {
			console.log(err);
		} else {
			console.log('success');
		}
	});
})

function strToUnicode(str) {
	const arr = [];
	for(let i = 0; i < str.length; i++) {
		arr.push(str.charCodeAt(i));
	}
	return arr;
}

function arrToRSA(N, e, arr) {
	const RSAList = [];
	for(let i = 0; i < arr.length; i++) {
		RSAList.push(quick(arr[i], e , N));
	}
	return RSAList;
}