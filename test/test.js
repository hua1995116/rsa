const n = 111;
let m = n - 1, k = 0; 
while (!(m & 1)) // 必须是偶数
{
    k++;
    m >>= 1; // 位移一位
    // console.log(m);
}
// 转化为
console.log(k);