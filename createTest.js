const key = new Buffer('66068209,17');
const toBase = key.toString('base64');
console.log(toBase);

const decodeBase = new Buffer(toBase, 'base64')
const string = decodeBase.toString();
console.log(string);


