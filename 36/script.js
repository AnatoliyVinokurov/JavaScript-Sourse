console.log("Hello, world!");
let x;
console.log(x);
x = 7;
console.log(x);
x = "buy";
console.log(x);
const pi = 3.1415926;
console.log('pi = ' + pi);
//pi = 10;
let y = x;
console.log(y);
const exp = 2.718281828;
y = 2.7;
let z = `exp = ${exp} or ${y}`
console.log(z);
y = true;
console.log(y);
y = null;
console.log(y);
y = 7 % 3;
console.log(y);
let res = 2 + true - 'five' + 10;
console.log(res);
res = 5 + '2';
console.log(res);
console.log(typeof res);
res = 3;
console.log(typeof res);
res = false;
console.log(typeof res);
res = undefined;
console.log(typeof res);
res = null;
console.log(typeof res);
res = 2 === '2';
console.log(res);
if(3 === '3'){
    console.log('as true');
}else{
    console.log('as false');
}
let age = 15;
let vol = age >= 18 ? 42 : 1.5;
console.log(`vol. = ` + vol);
res = 5;
switch (res){
    case 5:
        console.log(`number ${res}`);
        break;
    case '5':
        console.log(`string ${res}`);
        break;
    default:
        console.log(`not a five`);
}
for (let i = 1; i <=5; i++){
    console.log(`i = ${i}`);
}
//console.log(i);