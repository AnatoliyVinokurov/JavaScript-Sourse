let x = 5;
console.log(x);
console.log(typeof x);
x = '' + x; //String(x);
console.log(x);
console.log(typeof x);
x = '   42 '; //true -> 1; false -> 0; null -> 0; undef -> NaN;
console.log(x);
console.log(typeof x);
x = +x;//Number(x);
console.log(x);
console.log(typeof x);
let res = true / 2;
console.log(`result = ${res}`);
x = '3';
res = true + 2 + +x + 4;
console.log(`result = ${res}`);
res = 5 / 0; //0/0 -> NaN;
console.log(res);
console.log(typeof res);
if (isNaN(res)){ //(res === Infinity)  -- (!isFinite(res))
    console.log(';)');
}
x = '';
x = !!x; //Boolean(x); //Boolean(0,null,undefined,NaN,'') -> false
console.log(x);
console.log(typeof x);
let str = '';
//let nickName = str || 'Anonymous'; //null or undefined or 0 or ''
let nickName = str ?? 'Anonymous'; //null or undefined
console.log(`nickName: ${nickName}`);
greeting('Rabindranat');
greeting();

function greeting(name = 'Anonymous'){ //jast if undefined
//    name = name || 'Anonymous';
    console.log(`Hello, ${name}`);
}