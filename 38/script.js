const greeting = name => console.log(`Hello, ${name}`);

const pow4 = x => pow2(x) * pow2(x);

greeting('John');
console.log(pow2(5));
console.log(typeof greeting);
console.log(typeof pow2);
console.log(pow2);
console.log(greeting);
const fn = greeting;
fn('Rabindranat');
let x = factorial(5);
console.log(x);
console.log('=====');
let res = uniFunction(6, pow2, factorial);
console.log(res);
res = uniFunction(-3, pow2, factorial);
console.log(res);
res = uniFunction(3, pow2, pow4);
console.log(res);
res = uniFunction(10, x => x * 3, x => x / 2);
console.log(res);




res = pow4(factorial(2));

function uniFunction(x, fn1, fn2) {
    if (x < 0) {
        return fn1(x);
    } else {
        return fn2(x);
    }
}

function pow2(x) {
    return x * x;
}

function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}