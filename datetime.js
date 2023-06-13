
const date=new Date();
console.log(date);

console.log(date.toString(),date.toDateString());
console.log(date.toTimeString());
console.log(date.toUTCString());
console.log(date.toISOString());

let y=date.getFullYear();
let m=date.getMonth();
let d=date.getDate();
let day=date.getDay();
let H=date.getHours();
let M= date.getMinutes();
let s=date.getSeconds();

console.log(y,m,d,day,H,M,s);