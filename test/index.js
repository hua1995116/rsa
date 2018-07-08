const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
var pubkey = key.exportKey('pkcs8-public');//导出公钥
var prikey = key.exportKey('pkcs8-private');//导出私钥

console.log(pubkey);
console.log(prikey);