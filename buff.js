const buf = Buffer.from('aabbccdd');

console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf.length);
console.log(buf);
console.log(buf.toString());


for (const item of buf) {
  console.log(item) //72 101 121 33
}
